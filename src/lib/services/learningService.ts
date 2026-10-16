import 'server-only';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { ProgressSummary, QuizAttempt } from '@/types/domain';

export class LearningService {
  static async enroll(userId: string, courseId: string) {
    const course = await CourseRepository.findCourseById(courseId);
    if (!course || course.status !== 'published') {
      throw new Error('COURSE_UNAVAILABLE: Kursus tidak tersedia untuk pendaftaran.');
    }
    return await LearningRepository.enroll(userId, courseId, course.curriculumVersion);
  }

  static async completeLesson(
    userId: string,
    courseId: string,
    lessonId: string
  ): Promise<ProgressSummary> {
    const [course, lesson] = await Promise.all([
      CourseRepository.findCourseById(courseId),
      CourseRepository.findLessonById(lessonId),
    ]);
    if (!course || course.status !== 'published' || !lesson || lesson.courseId !== courseId || lesson.status !== 'published') {
      throw new Error('INVALID_LESSON: Pelajaran tidak tersedia untuk diselesaikan.');
    }

    const isEnrolled = await LearningRepository.isEnrolled(userId, courseId);
    if (!isEnrolled) {
      await LearningRepository.enroll(userId, courseId, course.curriculumVersion);
    }

    await LearningRepository.completeLesson(userId, courseId, lessonId);
    return await this.getProgress(userId, courseId);
  }

  static async getProgress(userId: string, courseId: string): Promise<ProgressSummary> {
    const course = await CourseRepository.findCourseById(courseId);
    if (!course) {
      throw new Error('COURSE_NOT_FOUND: Kursus tidak ditemukan.');
    }

    const lessons = await CourseRepository.getLessonsForCourse(courseId);
    const requiredLessons = lessons.filter((l) => l.isRequired && l.status === 'published');
    const totalRequired = requiredLessons.length;

    const completedLessonIds = await LearningRepository.getCompletedLessons(userId, courseId);
    const validCompletedIds = completedLessonIds.filter((id) =>
      requiredLessons.some((rl) => rl.id === id)
    );

    const completedCount = validCompletedIds.length;
    const percentage = totalRequired > 0 ? Math.round((completedCount / totalRequired) * 100) : 0;

    // Check quiz eligibility
    const quiz = await CourseRepository.getQuizForCourse(courseId);
    let quizPassed = true;
    if (quiz) {
      const attempt = await LearningRepository.getQuizAttempt(userId, courseId);
      quizPassed = attempt?.passed ?? false;
    }

    const isEligible = percentage === 100 && quizPassed;

    return {
      courseId,
      completedLessons: validCompletedIds,
      completedCount,
      totalRequired,
      percentage,
      isEligibleForCertificate: isEligible,
    };
  }

  static async gradeQuiz(
    userId: string,
    courseId: string,
    answers: { questionId: string; optionId: string }[]
  ): Promise<{
    score: number;
    passed: boolean;
    totalQuestions: number;
    correctCount: number;
    attempt: QuizAttempt;
  }> {
    const quiz = await CourseRepository.getQuizForCourse(courseId);
    if (!quiz) {
      throw new Error('QUIZ_NOT_FOUND: Kuis tidak ditemukan untuk kursus ini.');
    }

    let correctCount = 0;
    const answerMap = new Map(answers.map((a) => [a.questionId, a.optionId]));

    for (const q of quiz.questions) {
      const selected = answerMap.get(q.id);
      if (selected && selected === q.correctOptionId) {
        correctCount++;
      }
    }

    const totalQuestions = quiz.questions.length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const passed = score >= quiz.passScorePercent;

    const attempt = await LearningRepository.saveQuizAttempt(
      userId,
      courseId,
      score,
      passed
    );

    return {
      score,
      passed,
      totalQuestions,
      correctCount,
      attempt,
    };
  }
}

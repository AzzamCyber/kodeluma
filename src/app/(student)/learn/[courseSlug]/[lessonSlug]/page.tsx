import React from 'react';
import { notFound } from 'next/navigation';
import { requireUser } from '@/lib/auth/guard';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { LearningService } from '@/lib/services/learningService';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { LessonReader } from '@/components/learning/LessonReader';

interface LearnPageProps {
  params: Promise<{
    courseSlug: string;
    lessonSlug: string;
  }>;
}

export default async function LearnLessonPage({ params }: LearnPageProps) {
  const { courseSlug, lessonSlug } = await params;
  const user = await requireUser();

  const course = await CourseRepository.findCourseBySlug(courseSlug);
  if (!course) {
    notFound();
  }

  const allLessons = await CourseRepository.getLessonsForCourse(course.id);
  if (allLessons.length === 0) {
    notFound();
  }

  // Find targeted lesson or default to first lesson
  let currentLesson = allLessons.find((l) => l.slug === lessonSlug);
  if (!currentLesson) {
    currentLesson = allLessons[0];
  }

  // Ensure user is enrolled
  const isEnrolled = await LearningRepository.isEnrolled(user.id, course.id);
  if (!isEnrolled) {
    await LearningRepository.enroll(user.id, course.id, course.curriculumVersion);
  }

  const [initialProgress, quiz] = await Promise.all([
    LearningService.getProgress(user.id, course.id),
    CourseRepository.getQuizForCourse(course.id),
  ]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentNavbar user={user} />

      <main id="main-content" className="flex-grow-1 d-flex flex-column bg-light">
        <LessonReader
          course={course}
          currentLesson={currentLesson}
          allLessons={allLessons}
          initialProgress={initialProgress}
          quiz={quiz}
        />
      </main>

      <Footer />
    </div>
  );
}

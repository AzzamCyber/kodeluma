import type { MetadataRoute } from 'next';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { MOCK_COURSES } from '@/lib/mockData';

const BASE_URL = 'https://kodeluma.azzamcodex.id';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let courses = await CourseRepository.listPublishedCourses();
  if (!courses || courses.length === 0) {
    courses = MOCK_COURSES;
  }

  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/learning-paths`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/verify`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic course pages (all 22 standard industry courses)
  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: course.updatedAt ? new Date(course.updatedAt).toISOString() : currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}

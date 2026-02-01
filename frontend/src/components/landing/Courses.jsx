import React, { useState, useEffect } from 'react';
import { coursesAPI } from '../../services/api';
import ImageWithFallback from '../ImageWithFallback';
import CoursesSkeleton from './CoursesSkeleton';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await coursesAPI.getAll({ featured: true });
        const coursesData = response.results || response;
        setCourses(Array.isArray(coursesData) ? coursesData : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching courses:', err);
        if (err.code === 'ECONNABORTED' || err.message.includes('timeout')) {
          setError('Connection timed out. Please check your internet connection and try again.');
        } else if (err.response?.status === 404) {
          setError('No courses available at the moment.');
        } else if (err.code === 'ERR_NETWORK' || !err.response) {
          setError('Unable to connect to the server. Please check if the backend is running.');
        } else {
          setError('Failed to load courses. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const renderCourseCard = (course) => (
    <div className="iso-item" key={course.id}>
      <div className="content-wrapper">
        <figure>
          <a data-rel="prettyPhoto[rs_projects]" className="prettyPhoto kids_picture" href={course.cover_image} title={course.title}>
            <ImageWithFallback 
              src={course.cover_image} 
              alt={course.title}
              fallback="images/250x250-kos-1.jpg"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </a>
        </figure>
      </div>
      <div className="gallery-text">
        <div className="title">{course.title}</div>
        <p>{course.short_description}</p>
      </div>
      <div><a href="#" className="cws_button">Learn</a></div>
    </div>
  );

  if (loading) {
    return <CoursesSkeleton />;
  }

  if (error || !Array.isArray(courses) || courses.length === 0) {
    return (
        <div className="grid-row clearfix">
          <div className="grid-col grid-col-12">
            <section className="cws-widget">
              <section className="cws_widget_content">
                <div className="recent_projects">
                  <h3 className="section-title">Explore our digital study packs</h3>
                  <div className="projects_carousel clearfix" data-carousel-column="4">
                    <div>{error || 'No courses available at the moment.'}</div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
    );
  }

  return (
      <div className="grid-row clearfix">
        <div className="grid-col grid-col-12">
          <section className="cws-widget">
            <section className="cws_widget_content">
              <div className="recent_projects">
                <h3 className="section-title">Explore our digital study packs</h3>
                {/* <p className="section-description">
                  We've rounded up some excellent resources to help children understand sign language.
                  The learning path is your child's personalized learning journey divided into meaningful daily milestones.
                </p> */}
                <div className="projects_carousel clearfix" data-carousel-column="4">
                  {Array.isArray(courses) && courses.map(renderCourseCard)}
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
  );
};

export default Courses;

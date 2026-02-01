import React from "react";
import './skeleton.css';

const CoursesSkeleton = () => (
  <div className="grid-row clearfix">
    <div className="grid-col grid-col-12">
      <section className="cws-widget">
        <div className="widget-title">
          {/* Skeleton title */}
          <div className="skeleton skeleton-title" style={{ width: "300px", height: "32px" }}></div>
        </div>
        
        <section className="cws_widget_content">
          {/* Skeleton course cards grid */}
          <div className="grid-row clearfix margin-top-30">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="grid-col grid-col-4 margin-bottom-30">
                <div className="skeleton-course-card">
                  {/* Course image skeleton */}
                  <div className="skeleton skeleton-image" style={{ height: "200px" }}></div>
                  
                  <div className="course-content-skeleton" style={{ padding: "20px" }}>
                    {/* Course title skeleton */}
                    <div className="skeleton skeleton-text" style={{ width: "80%", height: "24px", marginBottom: "15px" }}></div>
                    
                    {/* Course description skeleton */}
                    <div className="skeleton skeleton-text" style={{ width: "100%", height: "16px", marginBottom: "8px" }}></div>
                    <div className="skeleton skeleton-text" style={{ width: "90%", height: "16px", marginBottom: "8px" }}></div>
                    <div className="skeleton skeleton-text" style={{ width: "60%", height: "16px", marginBottom: "20px" }}></div>
                    
                    {/* Progress bar skeleton */}
                    <div className="skeleton skeleton-progress" style={{ height: "8px", marginBottom: "15px" }}></div>
                    
                    {/* Button skeleton */}
                    <div className="skeleton skeleton-button" style={{ width: "120px", height: "40px" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  </div>
);

export default CoursesSkeleton;

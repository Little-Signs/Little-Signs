import React from 'react';
import ContentSection from '../layout/ContentSection';

const Courses = () => (
  <ContentSection>
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
                <div className="iso-item">
                  <div className="content-wrapper">
                    <figure>
                      <a data-rel="prettyPhoto[rs_projects]" className="prettyPhoto kids_picture" href="images/250x250-kos-1.jpg" title="Beginner ZSL Pack">
                        <img src="images/250x250-kos-1.jpg" alt="Beginner ZSL Pack" />
                      </a>
                    </figure>
                  </div>
                  <div className="gallery-text">
                    <div className="title">Beginner ZSL Pack</div>
                    <p>Start your sign language journey with basic Zimbabwe Sign Language fundamentals</p>
                  </div>
                  <div><a href="#" className="cws_button">Learn</a></div>
                </div>
                
                <div className="iso-item">
                  <div className="content-wrapper">
                    <figure>
                      <a data-rel="prettyPhoto[rs_projects]" className="prettyPhoto kids_picture" href="images/250x250-kos-2.jpg" title="Intermediate ZSL Pack">
                        <img src="images/250x250-kos-2.jpg" alt="Intermediate ZSL Pack" />
                      </a>
                    </figure>
                  </div>
                  <div className="gallery-text">
                    <div className="title">Intermediate ZSL Pack</div>
                    <p>Build on your foundation with more complex signs and conversational skills</p>
                  </div>
                  <div><a href="#" className="cws_button">Learn</a></div>
                </div>
                
                <div className="iso-item">
                  <div className="content-wrapper">
                    <figure>
                      <a data-rel="prettyPhoto[rs_projects]" className="prettyPhoto kids_picture" href="images/250x250-kos-3.jpg" title="Advanced ZSL Pack">
                        <img src="images/250x250-kos-3.jpg" alt="Advanced ZSL Pack" />
                      </a>
                    </figure>
                  </div>
                  <div className="gallery-text">
                    <div className="title">Advanced ZSL Pack</div>
                    <p>Master advanced Zimbabwe Sign Language with expert-level techniques</p>
                  </div>
                  <div><a href="#" className="cws_button">Learn</a></div>
                </div>
                
                <div className="iso-item">
                  <div className="content-wrapper">
                    <figure>
                      <a data-rel="prettyPhoto[rs_projects]" className="prettyPhoto kids_picture" href="images/250x250-kos-4.jpg" title="Family Learning Pack">
                        <img src="images/250x250-kos-4.jpg" alt="Family Learning Pack" />
                      </a>
                    </figure>
                  </div>
                  <div className="gallery-text">
                    <div className="title">Family Learning Pack</div>
                    <p>Perfect for families to learn sign language together and strengthen bonds</p>
                  </div>
                  <div><a href="#" className="cws_button">Learn</a></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </ContentSection>
);

export default Courses;

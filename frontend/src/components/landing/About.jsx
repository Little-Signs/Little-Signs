import React from "react";

const About = () => (
  <>
    <div className="grid-row clearfix">
      <div className="grid-col grid-col-12">
        <section className="cws-widget">
          <div className="widget-title">A Few Words About LittleSigns</div>
          <section className="cws_widget_content">
            <p>
              <img
                className="alignleft border size-thumbnail"
                src="images/Photoroom-20240516_025052.webp"
                alt="content_img_1"
                width="150"
                height="150"
              />
              At LittleSigns, we believe that learning sign language can be fun, empowering, and inclusive. 
              Our platform is primarily designed for deaf children but is also accessible to anyone interested in 
              learning sign language. With a focus on Zimbabwe Sign Language (ZSL), we aim to create an engaging 
              and supportive learning environment for all.
            </p>
            
            <div className="about-features">
              <div className="grid-row clearfix margin-top-30">
                <div className="grid-col grid-col-3">
                  <div className="feature-item">
                    <h4 className="feature-title">Interactive lessons</h4>
                  </div>
                </div>
                <div className="grid-col grid-col-3">
                  <div className="feature-item">
                    <h4 className="feature-title">Progress tracking</h4>
                  </div>
                </div>
                <div className="grid-col grid-col-3">
                  <div className="feature-item">
                    <h4 className="feature-title">For Zimbabwe</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
    
    <div className="grid-row clearfix margin-top-none">
      <div className="grid-col grid-col-4">
        <section className="cws-widget">
          <section className="cws_widget_content">
            <ul>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Interactive learning activities
                </span>
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Progress monitoring tools
                </span>
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  ZSL-focused curriculum
                </span>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className="grid-col grid-col-4">
        <section className="cws-widget">
          <section className="cws_widget_content">
            <ul>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Child-friendly interface
                </span>
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Parent engagement features
                </span>
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Teacher resources
                </span>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className="grid-col grid-col-4">
        <section className="cws-widget">
          <section className="cws_widget_content">
            <ul>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Video tutorials
                </span>
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Practice exercises
                </span>
              </li>
              <li>
                <span style={{ textDecoration: "underline" }}>
                  Community support
                </span>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
    
    <div className="grid-row clearfix margin-top-none margin-bottom-none">
      <div className="grid-col grid-col-12">
        <section className="cws-widget">
          <section className="cws_widget_content">
            <hr />
            <p>&nbsp;</p>
          </section>
        </section>
      </div>
    </div>
  </>
);

export default About;
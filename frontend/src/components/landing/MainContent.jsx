import BenefitsWidget from './BenefitsWidget';

const MainContent = () => (
  <div id="kids_middle_container">
    <div className="kids_top_content">
      <div className="kids_top_content_middle homepage">
        <div className="l-page-width">
          <section className="kids_posts_container clearfix">
            <div className="widget_wrapper">
              <BenefitsWidget 
                icon="images/icon-2.png"
                title="Interactive Learning"
                text="Engaging activities and games that make learning sign language fun and effective for children."
                link="#"
              />
              
              <BenefitsWidget 
                icon="images/icon-1.png"
                title="Visual Communication"
                text="Build essential communication skills through visual learning and hands-on practice."
                link="#"
              />
              
              <BenefitsWidget 
                icon="images/icon-3.png"
                title="Kid-Friendly Lessons"
                text="Age-appropriate lessons designed specifically for children to learn at their own pace."
                link="#"
              />
            </div>
          </section>
        </div>
        <div className="bottom-border"></div>
      </div>
    </div>
  </div>
);

export default MainContent;

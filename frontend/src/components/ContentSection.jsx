import React from 'react';

const ContentSection = ({ children }) => {
  return (
    <div className="bg-level-2-full-width-container kids_bottom_content">
      <div className="bg-level-2-page-width-container no-padding">
        <section className="kids_bottom_content_container">
          {/* ***************** - START Image floating - *************** */}
          <div className="page-content">
            <div className="bg-level-2 first-part" style={{ width: '70.5px' }}></div>
            <div className="container l-page-width">
              <div className="entry-container ">
                <main>
                  {children}
                  {/* .gl_col_ */}
                  {/* comments block */}
                  {/* //end comments block */}
                </main>
              </div>
              {/* .entry-container */}
            </div>
            <div className="bg-level-2 second-part" style={{ width: '70.5px' }}></div>
          </div>
          {/* ***************** - END Image floating - *************** */}
        </section>
        {/* .bottom_content_container */}
      </div>
      <div className="content_bottom_bg"></div>
    </div>
  );
};

export default ContentSection;
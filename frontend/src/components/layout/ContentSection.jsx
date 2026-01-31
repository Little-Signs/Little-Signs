import React from 'react';

const ContentSection = ({ children }) => (
  <div className="bg-level-2-full-width-container kids_bottom_content">
    <div className="bg-level-2-page-width-container no-padding">
      <section className="kids_bottom_content_container">
        <div className="page-content">
          <div className="container l-page-width">
            <div className="entry-container">
              <main>
                {children}
              </main>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ContentSection;

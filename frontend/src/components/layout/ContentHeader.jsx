import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ContentHeader = ({ title }) => {
  const location = useLocation();
  
  // Generate breadcrumb based on current path
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ];
    
    if (pathSegments.length > 0) {
      const currentPage = pathSegments[pathSegments.length - 1];
      const formattedName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
      breadcrumbs.push({ name: formattedName, path: location.pathname });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div id="kids_middle_container">
      <div className="kids_top_content">
        <div className="kids_top_content_middle">
          <div className="header_container">
            <div className="l-page-width">
              <h1>{title}</h1>
              <ul id="breadcrumbs">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.path}>
                    <li>
                      {index === breadcrumbs.length - 1 ? (
                        <span className="current_crumb">{crumb.name}</span>
                      ) : (
                        <Link to={crumb.path} title={crumb.name}>{crumb.name}</Link>
                      )}
                    </li>
                    {index < breadcrumbs.length - 1 && (
                      <span className="delimiter">&gt;</span>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

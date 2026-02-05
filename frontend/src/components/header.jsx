import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* HEADER BEGIN */}
      <div className="top-panel">
        <div className="l-page-width clearfix">
          <div className="wrapper">
            <div className="widget widget_cws_tweets">
              <div className='cws-widget-content '>
                <div className="latest_tweets ">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ .top-panel*/}
      <div className="kids-bg-level-1">
        <div className="bg-level-1"></div>
        <header id="kids_header">
          <div className="l-page-width clearfix">
            <ul className="kids_social">
              <li className="openbtn">
                <a href="#"></a>
              </li>
              <li className='lang_bar'>
                <div id="lang_sel">
                  <ul>
                    <li>
                      <a href="#" className="lang_sel_sel icl-en"><img className="iclflag" src="images/en.png" alt="ZW" title="Zimbabwe" />&nbsp;</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="https://www.facebook.com/littlesigns" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x"></i></a>
                <span style={{backgroundColor: "#1877f2"}}></span>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/littlesigns" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
                <span style={{backgroundColor: "#0077b5"}}></span>
              </li>
              <li>
                <a href="https://twitter.com/littlesigns" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x"></i></a>
                <span style={{backgroundColor: "#1da1f2"}}></span>
              </li>
              <li>
                <a href="https://www.instagram.com/littlesigns" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
                <span style={{backgroundColor: "#e4405f"}}></span>
              </li>
              <li className="search">
                <a href="#" title="Search"></a>
                <span></span>
              </li>
              <li>
                <form role="search" id="search-form" method="get" action="">
                  <input type="text" value="" name="s" id="s" />
                  <input className="button medium button-style1" type="submit" id="search-submit" value="Search" />
                </form>
              </li>
            </ul>
            {/* .kids_social */}
            <div className="kids_clear"></div>
            <div id="kids_logo_block" className="logo-position-left">
              <Link id="kids_logo_text" to="/">
                <img src="images/logo_c.png" alt="Little Signs" title="Little Signs" />
              </Link>
            </div>
            <nav id="kids_main_nav" className="menu-position-right">
              <div className="menu-button">
                <span className="menu-button-line"></span>
                <span className="menu-button-line"></span>
                <span className="menu-button-line"></span>
              </div>
              <ul id="menu-main" className="clearfix flexnav " data-breakpoint="800">
                <li className={`menu-item menu-item-type-custom menu-item-object-custom ${location.pathname === '/' ? 'current-menu-item current_page_item' : ''}`}>
                  <Link to="/">Home</Link>
                </li>
                <li className={`menu-item ${location.pathname === '/learn' ? 'current-menu-item current_page_item' : ''}`}>
                  <Link to="/learn">Learn</Link>
                </li>
                <li className={`menu-item ${location.pathname === '/resources' ? 'current-menu-item current_page_item' : ''}`}>
                  <Link to="/resources">Resources</Link>
                </li>
                <li className={`menu-item ${location.pathname === '/about' ? 'current-menu-item current_page_item' : ''}`}>
                  <Link to="/about">About</Link>
                </li>
                <li className={`menu-item ${location.pathname === '/contact' ? 'current-menu-item current_page_item' : ''}`}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className={`menu-item ${location.pathname === '/login' ? 'current-menu-item current_page_item' : ''}`}>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            {/* #kids_main_nav */}
          </div>
          {/*/ .l-page-width*/}
        </header>
        {/*/ #kids_header*/}
        {/* HEADER END */}
      </div>
    </>
  );
};

export default Header;
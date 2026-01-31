import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  // Language dropdown state
  const [langOpen, setLangOpen] = useState(false);

  return (
    <>
      <div className="kids_bottom_container footer">
        <div className="l-page-width">
          <div className="wrapper">
          {/* Logo and Description Widget */}
          <div className="widget widget_text">
            <div className="textwidget">
              <div className="footer-logo-section">
                <img src="images/logo.png" alt="Little Signs" className="footer-logo" />
                <h3 className="footer-site-name">Little Signs</h3>
                <p className="footer-description">
                  A premium platform designed to help children learn and grow through interactive experiences 
                  and engaging content. We believe in making education fun and accessible for every child.
                </p>
              </div>
            </div>
          </div>
            {/* Twitter Widget */}
            <div className="widget widget_cws_tweets">
              <div className="cws-widget-content">
                {/* twitter header */}
                <div className="carousel_header clearfix">
                  <div className="widget_carousel_nav">
                    <i className="prev">
                      <FaAngleLeft />
                    </i>
                    <i className="next">
                      <FaAngleRight />
                    </i>
                  </div>
                  <h3 className="widget-title">Twitter</h3>
                </div>
                {/* twitter carousel */}
                <div className="twitter-carousel carousel latest_tweets"></div>
              </div>
            </div>
            {/* Latest Posts Widget */}
            <div className="widget widget_cws_latest_posts">
              <div className="latest-posts-widget">
                <h3 className="widget-title">Latest Posts</h3>
                <div className="widget-content">
                  <ul>
                    <li>
                      <div className="kids_image_wrapper ">
                        <a
                          href="pic/HappyFeet_1st4.jpg"
                          className="prettyPhoto kids_mini_picture"
                          data-rel="prettyPhoto[rpwt]"
                        >
                          <img
                            src="images/70x70-img-1.jpg"
                            width="70"
                            height="70"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="kids_post_content">
                        <h4>
                          <a href="#">Image Post</a>
                        </h4>
                        <p>Lorem ipsum dolor ...</p>
                        <p className="time-post">January 3, 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className="kids_image_wrapper ">
                        <a
                          href="pic/LegoMovie_3rd4.jpg"
                          className="prettyPhoto kids_mini_picture"
                          data-rel="prettyPhoto[rpwt]"
                        >
                          <img
                            src="images/70x70-img-2.jpg"
                            width="70"
                            height="70"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="kids_post_content">
                        <h4>
                          <a href="#">Image Post</a>
                        </h4>
                        <p>Lorem ipsum dolor ...</p>
                        <p className="time-post">January 2, 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className="kids_image_wrapper ">
                        <a
                          href="pic/Tangled_3rd5.jpg"
                          className="prettyPhoto kids_mini_picture"
                          data-rel="prettyPhoto[rpwt]"
                        >
                          <img
                            src="images/70x70-img-3.jpg"
                            width="70"
                            height="70"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="kids_post_content">
                        <h4>
                          <a href="#">Video blog post</a>
                        </h4>
                        <p>Lorem ipsum dolor ...</p>
                        <p className="time-post">January 1, 2015</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Calendar Widget */}
            <div className="widget widget_calendar">
              <h3 className="widget-title">Calendar</h3>
              <div id="calendar_wrap"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="kids-footer-copyrights footer">
        <div className="l-page-width  clearfix">
          <div className="wrapper">
            <ul className="kids_social">
              <li>
                <a
                  href="https://www.facebook.com/littlesigns"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook fa-2x">
                    <FaFacebookF />
                  </i>
                </a>
                <span style={{ backgroundColor: "#1877f2" }}></span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/littlesigns"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-2x">
                    <FaLinkedinIn />
                  </i>
                </a>
                <span style={{ backgroundColor: "#0077b5" }}></span>
              </li>
              <li>
                <a
                  href="https://twitter.com/littlesigns"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-2x">
                    <FaTwitter />
                  </i>
                </a>
                <span style={{ backgroundColor: "#1da1f2" }}></span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/littlesigns"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram fa-2x">
                    <FaInstagram />
                  </i>
                </a>
                <span style={{ backgroundColor: "#e4405f" }}></span>
              </li>
              <li className="lang_bar">
                <div
                  id="lang_sel"
                  onMouseEnter={() => setLangOpen(true)}
                  onMouseLeave={() => setLangOpen(false)}
                  style={{ position: "relative" }}
                >
                  <ul>
                    <li>
                      {/* language dropdown */}
                      <a href="#" className="lang_sel_sel icl-en">
                        <img
                          className="iclflag"
                          src="images/en.png"
                          alt="en"
                          title="English"
                        />
                      </a>
                      <ul
                        style={{
                          display: langOpen ? "block" : "none",
                          position: "absolute",
                          left: 0,
                          top: "100%",
                          zIndex: 19,
                          background: "#fff",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        <li className="icl-fr">
                          <a href="#">
                            <img
                              className="iclflag"
                              src="images/fr.png"
                              alt="fr"
                              title="Français"
                            />
                          </a>
                        </li>
                        <li className="icl-de">
                          <a href="#">
                            <img
                              className="iclflag"
                              src="images/de.png"
                              alt="de"
                              title="Deutsch"
                            />
                          </a>
                        </li>
                        <li className="icl-it">
                          <a href="#">
                            <img
                              className="iclflag"
                              src="images/it.png"
                              alt="it"
                              title="Italiano"
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="widget widget_text">
              <div className="textwidget">
                Copyrights @2024: Little Signs - Children Learning Platform
              </div>
            </div>
          </div>
        </div>
        <div className="dark-mask"></div>
      </div>
    </>
  );
};

export default Footer;
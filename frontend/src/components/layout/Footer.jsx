import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
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
                        {/* Quick Links Widget */}
            <div className="widget widget_quick_links">
              <h3 className="widget-title">Quick Links</h3>
              <div className="quick-links-content">
                <ul>
                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/profile">My Profile</a></li>
                  <li><a href="/settings">Settings</a></li>
                  <li><a href="/support">Support</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/terms">Terms of Service</a></li>
                </ul>
              </div>
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
                  href="https://www.youtube.com/c/littlesigns"
                  title="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube fa-2x">
                    <FaYoutube />
                  </i>
                </a>
                <span style={{ backgroundColor: "#ff0000" }}></span>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@littlesigns"
                  title="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-tiktok fa-2x">
                    <FaTiktok />
                  </i>
                </a>
                <span style={{ backgroundColor: "#000000" }}></span>
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
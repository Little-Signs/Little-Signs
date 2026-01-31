import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaGooglePlus, FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGooglePlus, href: '#', color: '#dd4b39', title: 'Google Plus' },
    { icon: FaFacebook, href: '#', color: '#3b5998', title: 'Facebook' },
    { icon: FaYoutube, href: '#', color: '#b31217', title: 'Youtube' },
    { icon: FaTwitter, href: '#', color: '#4099ff', title: 'Twitter' }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  const galleryImages = [
    { id: 1, src: '/images/gallery-1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/images/gallery-2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/images/gallery-3.jpg', alt: 'Gallery Image 3' }
  ];

  const latestPosts = [
    {
      id: 1,
      title: 'Image Post',
      excerpt: 'Lorem ipsum dolor ...',
      date: 'January 3, 2015',
      image: '/images/post-1.jpg'
    },
    {
      id: 2,
      title: 'Image Post',
      excerpt: 'Lorem ipsum dolor ...',
      date: 'January 2, 2015',
      image: '/images/post-2.jpg'
    },
    {
      id: 3,
      title: 'Video blog post',
      excerpt: 'Lorem ipsum dolor ...',
      date: 'January 1, 2015',
      image: '/images/post-3.jpg'
    }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Gallery Section */}
            <div className="footer-widget gallery-widget">
              <div className="widget-header">
                <h3 className="widget-title">Gallery</h3>
                <div className="widget-nav">
                  <button className="nav-btn prev-btn">
                    <FaAngleLeft />
                  </button>
                  <button className="nav-btn next-btn">
                    <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="gallery-grid">
                {galleryImages.map((image) => (
                  <div key={image.id} className="gallery-item">
                    <div className="gallery-image-wrapper">
                      <img src={image.src} alt={image.alt} className="gallery-image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Twitter Section */}
            <div className="footer-widget twitter-widget">
              <div className="widget-header">
                <div className="widget-nav">
                  <button className="nav-btn prev-btn">
                    <FaAngleLeft />
                  </button>
                  <button className="nav-btn next-btn">
                    <FaAngleRight />
                  </button>
                </div>
                <h3 className="widget-title">Twitter</h3>
              </div>
              <div className="twitter-content">
                <div className="tweet">
                  <p className="tweet-text">Follow us on Twitter for the latest updates and news!</p>
                  <p className="tweet-time">2 hours ago</p>
                </div>
              </div>
            </div>

            {/* Latest Posts Section */}
            <div className="footer-widget posts-widget">
              <h3 className="widget-title">Latest Posts</h3>
              <div className="posts-list">
                {latestPosts.map((post) => (
                  <div key={post.id} className="post-item">
                    <div className="post-image-wrapper">
                      <img src={post.image} alt={post.title} className="post-image" />
                    </div>
                    <div className="post-content">
                      <h4 className="post-title">
                        <a href="#">{post.title}</a>
                      </h4>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <p className="post-date">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Section */}
            <div className="footer-widget calendar-widget">
              <h3 className="widget-title">Calendar</h3>
              <div className="calendar-wrapper">
                <div className="mini-calendar">
                  <div className="calendar-header">
                    <span className="calendar-month">January</span>
                    <span className="calendar-year">{currentYear}</span>
                  </div>
                  <div className="calendar-grid">
                    <div className="calendar-weekdays">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <div key={index} className="calendar-weekday">{day}</div>
                      ))}
                    </div>
                    <div className="calendar-days">
                      {Array.from({ length: 31 }, (_, i) => (
                        <div key={i} className="calendar-day">{i + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            
            {/* Social Media Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    title={social.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: social.color }}
                  >
                    <Icon className="social-icon" />
                  </a>
                );
              })}
              
              {/* Language Selector */}
              <div className="language-selector">
                <button className="language-button">
                  <span className="flag">🇺🇸</span>
                  <span className="language-code">EN</span>
                </button>
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <a key={lang.code} href="#" className="language-option">
                      <span className="flag">{lang.flag}</span>
                      <span className="language-name">{lang.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              <p>Copyrights @{currentYear}: Little Signs - Children Platform</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

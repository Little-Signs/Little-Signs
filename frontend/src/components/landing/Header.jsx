import TopPanel from './TopPanel';
import LanguageSelector from './LanguageSelector';
import SocialMediaLinks from './SocialMediaLinks';
import SearchForm from './SearchForm';
import MenuItems from './MenuItems';
import SliderSlides from './SliderSlides';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <TopPanel />
    
    <div className="kids-bg-level-1">
      <div className="bg-level-1"></div>
      <header id="kids_header">
        <div className="l-page-width clearfix">
          <ul className="kids_social">
            <li className="openbtn">
              <a href="#"></a>
            </li>
            <li className="lang_bar">
              <LanguageSelector />
            </li>
            <SocialMediaLinks />
            <li className="search">
              <a href="#" title="Search"></a>
              <span></span>
            </li>
            <SearchForm />
          </ul>
          
          <div className="kids_clear"></div>
          
          <div id="kids_logo_block" className="logo-position-left">
            <Link id="kids_logo_text" to="/">
              <img src="images/logo_c.png" alt="Little Signs - Learn Sign Language for Kids" title="Little Signs - Learn Sign Language for Kids" />
            </Link>
          </div>
          
          <nav id="kids_main_nav" className="menu-position-right">
            <div className="menu-button">
              <span className="menu-button-line"></span>
              <span className="menu-button-line"></span>
              <span className="menu-button-line"></span>
            </div>
            <ul id="menu-main" className="clearfix flexnav" data-breakpoint="800">
              <MenuItems />
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="bg-level-2-page-width-container">
        <div className="bg-level-2 first-part" id="bg-level-2"></div>
        <div className="l-page-width">
          <div className="kids_slider_bg img_slider">
            <div className="kids_slider_wrapper">
              <div className="kids_slider_inner_wrapper">
                <div className="img-slider">
                  <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
                    <div id="rev_slider_1_1" className="rev_slider fullwidthabanner">
                      <ul>
                        <SliderSlides />
                      </ul>
                      <div className="tp-bannertimer tp-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-level-2 second-part" id="bg-level-2"></div>
      </div>
    </div>
  </>
);

export default Header;

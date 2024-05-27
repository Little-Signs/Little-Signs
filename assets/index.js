// // Import jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const WOW = require('./js/wow.min.js');

// js imports
import './js/tweenmax.min.js';
import './js/jquery.isotope.min.js';
import './js/jquery.fancybox.js';
import './js/select2.min.js';
import './js/jquery.validate.min.js';
import './js/jquery.form.min.js';
import './js/owl.carousel.js';
import './js/modernizr.js';
import './js/scripts.js';

import './js/revolution/jquery.themepunch.enablelog.js';
import './js/revolution/jquery.themepunch.revolution.min.js';
import './js/revolution/extensions/revolution.extension.actions.min.js';
import './js/revolution/extensions/revolution.extension.kenburn.min.js';
import './js/revolution/extensions/revolution.extension.layeranimation.min.js';
import './js/revolution/extensions/revolution.extension.parallax.min.js';
import './js/revolution/extensions/revolution.extension.slideanims.min.js';
import './js/revolution/extensions/revolution.extension.navigation.min.js';


document.addEventListener('DOMContentLoaded', () => {
    // Initialize WoW.js
    window.wow = new WOW.WOW({
      live: false
    });
  
    window.wow.init({
      offset: 50,
    });
  
    // Any other initialization code that requires the DOM to be fully loaded
  });

// CSS Imports
import './css/main.css';
import './css/font-awesome.css';
import './css/jquery.fancybox.css';
import './css/select2.css';
import './css/animate.css';
import './css/shop.css';

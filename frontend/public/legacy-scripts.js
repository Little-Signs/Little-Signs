// Legacy script loader for jQuery plugins that don't support strict mode
(function() {
  'use strict';
  
  // Function to load scripts in non-strict mode
  function loadLegacyScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Load scripts in order
  async function loadScripts() {
    try {
      // Wait for jQuery to be available
      if (typeof jQuery === 'undefined') {
        await new Promise(resolve => {
          const checkJQuery = () => {
            if (typeof jQuery !== 'undefined') {
              resolve();
            } else {
              setTimeout(checkJQuery, 100);
            }
          };
          checkJQuery();
        });
      }
      
      // Load jQuery UI
      await loadLegacyScript('/src/assets/js/jquery-ui.min.js');
      
      // Load other core scripts
      await loadLegacyScript('/src/assets/js/jquery.easing-1.3.min.js');
      await loadLegacyScript('/src/assets/js/scripts.js');
      
      // Load carousel and layout scripts
      await loadLegacyScript('/src/assets/js/owl.carousel.js');
      await loadLegacyScript('/src/assets/js/jquery.isotope.min.js');
      await loadLegacyScript('/src/assets/js/jquery.flexnav.min.js');
      
      // Load prettyPhoto with error handling
      try {
        await loadLegacyScript('/src/assets/js/jquery.prettyPhoto.js');
      } catch (e) {
        console.warn('prettyPhoto failed to load:', e);
      }
      
      // Load other optional scripts
      try {
        await loadLegacyScript('/src/assets/js/colorpicker.js');
      } catch (e) {
        console.warn('colorpicker failed to load:', e);
      }
      
      try {
        await loadLegacyScript('/src/assets/js/scripts_1.js');
      } catch (e) {
        console.warn('scripts_1 failed to load:', e);
      }
      
      try {
        await loadLegacyScript('/src/assets/js/retina.min.js');
      } catch (e) {
        console.warn('retina script failed to load:', e);
      }
      
      try {
        await loadLegacyScript('/src/assets/js/jquery.tweet.js');
      } catch (e) {
        console.warn('tweet script failed to load:', e);
      }
      
      try {
        await loadLegacyScript('/src/assets/js/jquery.lavalamp-1.4.min.js');
      } catch (e) {
        console.warn('lavalamp script failed to load:', e);
      }
      
      // Load Revolution slider
      try {
        await loadLegacyScript('/src/assets/js/jquery.themepunch.tools.min.js');
        await loadLegacyScript('/src/assets/js/jquery.themepunch.revolution.min.js');
      } catch (e) {
        console.warn('Revolution slider failed to load:', e);
      }
      
      console.log('All legacy scripts loaded successfully');
      
    } catch (error) {
      console.error('Error loading legacy scripts:', error);
    }
  }
  
  // Start loading when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadScripts);
  } else {
    loadScripts();
  }
})();

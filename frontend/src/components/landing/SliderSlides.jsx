const SliderSlides = () => (
  <>
    {/* SLIDE 1 */}
    <li data-transition="random" data-slotamount="7" data-masterspeed="300" data-saveperformance="off">
      <img src="images/slide-2.jpg" alt="Little Signs - Learn Sign Language" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
      <div className="tp-caption kids-slider-header customin fadeout tp-resizeme" 
           data-x="7" data-y="300" 
           data-customin="x:-90;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" 
           data-speed="600" data-start="200" data-easing="Power3.easeInOut" 
           data-splitin="none" data-splitout="none" data-elementdelay="2" 
           data-endelementdelay="0.1" data-endspeed="300">
        Little Signs
      </div>
      <div className="tp-caption kids-slider-header-alt customin fadeout tp-resizeme" 
           data-x="7" data-y="357" 
           data-customin="x:-90;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" 
           data-speed="600" data-start="500" data-easing="Power3.easeInOut" 
           data-splitin="none" data-splitout="none" data-elementdelay="2" 
           data-endelementdelay="0.1" data-endspeed="300">
        Fun and interactive sign language learning for children of all ages.
      </div>
    </li>
    
  </>
);

export default SliderSlides;

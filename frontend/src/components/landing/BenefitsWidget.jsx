const BenefitsWidget = ({ icon, title, text, link }) => (
  <div className="widget widget_cws_benefits">
    <div className="widget-icon pic">
      <img src={icon} alt="" />
    </div>
    <div className="cws-widget-content benefits_widget">
      <h3 className="widget-title">{title}</h3>
      <section className="text_part">{text}</section>
      <a href={link} className="cws_button">More</a>
    </div>
  </div>
);

export default BenefitsWidget;

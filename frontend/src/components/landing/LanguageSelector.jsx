const LanguageSelector = () => (
  <div id="lang_sel">
    <ul>
      <li>
        <a href="#" className="lang_sel_sel icl-en">
          <img className="iclflag" src="images/en.png" alt="en" title="English" />
        </a>
        <ul>
          <li className="icl-fr">
            <a href="#">
              <img className="iclflag" src="images/fr.png" alt="fr" title="Français" />
            </a>
          </li>
          <li className="icl-de">
            <a href="#">
              <img className="iclflag" src="images/de.png" alt="de" title="Deutsch" />
            </a>
          </li>
          <li className="icl-it">
            <a href="#">
              <img className="iclflag" src="images/it.png" alt="it" title="Italiano" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default LanguageSelector;

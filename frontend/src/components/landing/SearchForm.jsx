const SearchForm = () => (
  <li>
    <form role="search" id="search-form" method="get" action="">
      <input type="text" defaultValue="" name="s" id="s" />
      <input className="button medium button-style1" type="submit" id="search-submit" value="Search" />
    </form>
  </li>
);

export default SearchForm;

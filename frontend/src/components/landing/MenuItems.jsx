import { Link, useLocation } from 'react-router-dom'

const MenuItems = () => {
  const location = useLocation();

  return (
    <>
      <li className={`menu-item menu-item-type-custom menu-item-object-custom ${location.pathname === '/' ? 'current-menu-item current_page_item' : ''}`}>
        <Link to="/">Home</Link>
      </li>
      <li className={`menu-item ${location.pathname === '/learn' ? 'current-menu-item current_page_item' : ''}`}>
        <Link to="/learn">Learn</Link>
      </li>
      <li className={`menu-item ${location.pathname === '/resources' ? 'current-menu-item current_page_item' : ''}`}>
        <Link to="/resources">Resources</Link>
      </li>
      <li className={`menu-item menu-item-has-children ${location.pathname === '/about' ? 'current-menu-item current_page_item' : ''}`}>
        <Link to="/about">About</Link>
      </li>
      <li className={`menu-item ${location.pathname === '/contact' ? 'current-menu-item current_page_item' : ''}`}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={`menu-item ${location.pathname === '/login' ? 'current-menu-item current_page_item' : ''}`}>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
};

export default MenuItems;

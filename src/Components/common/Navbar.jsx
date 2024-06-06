import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const { cart } = useCart();

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="nav-wrapper grid p-2">
            <div className="flex justify-between items-center">
              <Link to="/"><img src="../assets/images/logo.png" alt="Logo" /></Link>

              <div className="input-holder">
                <input type="search" placeholder="search products..." />
                <span className="absolute">
                  <img src="../assets/images/search-icon.svg" alt="Search Icon" />
                </span>
              </div>

              <div className="user-info flex items-center">
                <Link to="/cart" className="p-2 cart-link">
                  <span className="cart-count">{cart.length}</span>
                  <img src="../assets/images/addtocart-icon.svg" alt="Cart Icon" />
                </Link>
                <Link to="/profile" className="p-2">
                  <img src="../assets/images/person-icon.svg" alt="User Icon" />
                </Link>
                <Link className='fs-300 p-2 mr-2' to='/login'> JOIN US </Link>
                <button id="menu" className="menu-btn" onClick={toggleMenu}>
                  <img src="../assets/images/menu-icon.png" width="26px" height="26px" alt="Menu Icon" />
                </button>
              </div>
            </div>

            <nav className="navbar__nav">
              <ul id="navbar__list" className={`navbar__list flex justify-between ${menuActive ? 'active' : ''}`} role="list">
                <li className="navbar__nav-item p-1"><Link to="/products/pre-workout">PREWORKOUT</Link></li>
                <li className="navbar__nav-item p-1"><Link to="/products/newest">NEWEST</Link></li>
                <li className="navbar__nav-item p-1"><Link to="/products/proteins">PROTEINS</Link></li>
                <li className="navbar__nav-item p-1"><Link to="/products/recuperation">RECUPERATION</Link></li>
                <li className="navbar__nav-item p-1"><Link to="/products/vitamins">VITAMINS</Link></li>
                <li className="navbar__nav-item p-1"><Link to="/products/accessoires">ACCESSOIRES</Link></li>
                <img className="close-icon" id="close-icon" src="../assets/images/close-icon.png" alt="Close Icon"
                  width="25px" height="25px" onClick={toggleMenu} />
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

export default function Navbar({ setShowLogin }) {
  const { getTotalCartQuantity } = useContext(StoreContext);
  const [menu, setMenu] = useState('menu');

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu('home')} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobail-app')} className={menu === "mobail-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartQuantity() === 0 ? "" : "dot"}>
            {getTotalCartQuantity() > 0 && <span>{getTotalCartQuantity()}</span>}
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

import React from 'react'
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <span className="logo">Logo</span>
      <nav>
        <ul>
            <li>
              <NavLink exact className={isActive => "nav-link" + (!isActive ? " unselected" : "")} to="/">Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} to="/urunler">Ürünler</NavLink>
            </li>
            <li>
              <NavLink className={isActive => "nav-link" + (!isActive ? " unselected" : "")} to="/urunekle">Ürün Ekle</NavLink>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
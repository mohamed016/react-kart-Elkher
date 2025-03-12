import React from "react";
import { Link } from "react-router-dom";
import logoNav from '../assets/img/logo-landing.png';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo-nav">
        <img src={logoNav} alt="logo" />
      </div>
      <ul className="nav nav-underline me-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            الاسنان
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/learning">
            التعليم
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/event">
            الفاعليات
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jobs">
            الوظائف
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

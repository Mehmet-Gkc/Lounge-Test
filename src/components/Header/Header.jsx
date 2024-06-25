import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from '../../../public/images/Loungmelogo1.png';

function Header() {
  return (
    <header className="App-header">
    <div className="nav">
      <nav>
        <div className="header-logo group">
          <Link to="/">
            <img src={Logo} alt="Lounge Me Logo" />
            <span>LOUNGE ME</span>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/airports">Airports</Link>
          </li>
          <li>
            <Link to="/membershipbenefits">Membership Benefits</Link>
          </li>
          <li>
            <Link to="/gettheapp">Get the app</Link>
          </li>
          <li>
            <Link to="/forbusiness">for business</Link>
          </li>
          <li>
            <Link to="/joinnow">join now</Link>
          </li>
        </ul>
      </nav>

      <div className="auth">
      <Link to="/login">Login</Link>
        <select>
          <option>Language</option>
          <option>Englisch</option>
          <option>Deutsch</option>
        </select>
        <select>
          <option>Currency</option>
        </select>
      </div>
    </div>
  </header>   
  );
}

export default Header;

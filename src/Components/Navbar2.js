import React from 'react';
import Logo from "../Assets/logo.png";

const Navbar2 = () => {
  return (
    <nav>
        <div className="nav-logo-container">
            <a href="/portfolio">
              <img src={Logo} alt="" />
            </a>   
    </div>
    </nav>
  )
}

export default Navbar2;



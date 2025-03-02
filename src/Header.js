import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [currentUser,setCurrentUser] = useState(null);

  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);


  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown",handleClickOutside);

    return () => {
      document.removeEventListener("mousedown",handleClickOutside)
    };
  },[])
  

  return (
    <header className="header">
      <Link to="/">  
         <img className="ustresim" src="/pics/kartal.png" alt="kartal" />
      </Link>

      <nav className="navbar">
        <Link to="/" className="active">Ana Sayfa</Link>
        <Link to="prices">Ücretler</Link>
        <Link to="hakkında">Hakkında</Link>
        <Link to="konum">Konum</Link>
      </nav>
      <nav ref={sidebarRef} className={`sidebar ${sidebar ? "active" : ""}`}>
        <Link to="/" className="active">Ana Sayfa</Link>
        <Link to="prices">Ücretler</Link>
        <Link to="hakkında">Hakkında</Link>
        <Link to="konum">Konum</Link>
        <Link to="randevu" className="randevu570">Randevu Al</Link>
        <Link to="login" className="login570">Giriş Yap</Link>
        <Link to="signup" className="signup570">Kayıt Ol</Link>
      </nav>

      <div className="buttons">
        <Link to="randevu"><button id="randevuBtn">Randevu Al</button></Link>
        {currentUser ? <button> {currentUser}</button> : <div to="login">
          <button id="loginBtn">
            <Link to="login" className="girisnav">
              Giriş Yap
            </Link>{" "}
            /{" "}
            <Link to="signup" className="kayıtnav">
              Kayıt Ol
            </Link>
          </button>
        </div>}        
      </div>

      <button className="menuButton" onClick={toggleSidebar}><FaBars /></button>

    </header>
  );
};

export default Header;

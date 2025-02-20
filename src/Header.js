import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">  
         <img className="ustresim" src="/pics/kartal.png" alt="kartal" />
      </Link>

      <h1>TUZLA'NIN BİR NUMARASI</h1>

      <nav className="navbar">
        <Link to="/" className="active">Ana Sayfa</Link>
        <Link to="prices">Ücretler</Link>
        <Link to="hakkında">Hakkında</Link>
        <Link to="konum">Konum</Link>
      </nav>

      <div className="buttons">
        <Link to="/randevu"><button id="randevuBtn">Randevu Al</button></Link>
        <article to="login">
          <button id="loginBtn">
            <Link to="login" className="girisnav">
              Giriş Yap
            </Link>{" "}
            /{" "}
            <Link to="signup" className="kayıtnav">
              Kayıt Ol
            </Link>
          </button>
        </article>
      </div>
    </header>
  );
};

export default Header;

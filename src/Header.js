import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const handleRefresh = useCallback(async() => {
    try {
      const response = await axios.get("http://localhost:5000/refresh",{
        headers:{"Content-Type":"application/json"},
        withCredentials:true
      });
      if(response.status === 200) {
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken",newAccessToken);
      } else {
        console.log("TOKEN SÜRESİ DOLDU");
        handleLogout();
      }
    } catch (error) {
      console.log("TOKEN GEÇERSİZ:",error.message);
      handleLogout();
    } 
  },[])

  useEffect(() => {
    const checkTokenExp = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setCurrentUser(null);
        return;
      }
      const decoded = jwtDecode(token);
      
      if(decoded.exp < Date.now() / 1000) {
          await handleRefresh();        
        } else {
        setCurrentUser(decoded.UserInfo);
      }
    };

    checkTokenExp();

    const interval = setInterval(checkTokenExp, 10000);

    return () => clearInterval(interval);
  }, [handleRefresh]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <img className="ustresim" src="/pics/kartal.png" alt="kartal" />
      </Link>

      <nav className="navbar">
        <Link to="/" className="active">
          Ana Sayfa
        </Link>
        <Link to="prices">Ücretler</Link>
        <Link to="hakkında">Hakkında</Link>
        <Link to="konum">Konum</Link>
      </nav>
      <nav ref={sidebarRef} className={`sidebar ${sidebar ? "active" : ""}`}>
        <Link to="/" className="active">
          Ana Sayfa
        </Link>
        <Link to="prices">Ücretler</Link>
        <Link to="hakkında">Hakkında</Link>
        <Link to="konum">Konum</Link>
        <Link to="randevu" className="randevu570">
          Randevu Al
        </Link>
        <Link to="login" className="login570">
          Giriş Yap
        </Link>
        <Link to="signup" className="signup570">
          Kayıt Ol
        </Link>
      </nav>

      {currentUser ? (
        <div className="buttons">
          <button>
            <Link to="profile">
              {" "}
              {currentUser.firstname} {currentUser.lastname}
            </Link>
          </button>
          <button onClick={handleLogout}>Çıkışş yapıyorum</button>
          <button onClick={handleRefresh}>REFRESH</button>
        </div>
      ) : (
        <div className="buttons">
          <Link to="randevu">
            <button id="randevuBtn">Randevu Al</button>
          </Link>
          {currentUser ? (
            <button> {currentUser}</button>
          ) : (
            <div to="login">
              <button id="loginBtn">
                <Link to="login" className="girisnav">
                  Giriş Yap
                </Link>{" "}
                /{" "}
                <Link to="signup" className="kayıtnav">
                  Kayıt Ol
                </Link>
              </button>
            </div>
          )}
        </div>
      )}

      <button className="menuButton" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;

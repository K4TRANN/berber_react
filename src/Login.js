import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-box">
      <h2>Giriş Yap</h2>
      <form>
        <div className="user-box">
          <input type="email" required />
          <label>E-posta</label>
        </div>
        <div className="user-box">
          <input type="password" required />
          <label>Şifre</label>
        </div>
        <div className="link-container">
          <a href="/" className="girisbtn">
            Giriş Yap
          </a>
          <p>
            Hesabın yok mu? <Link to="/signup">Kayıt Ol</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;

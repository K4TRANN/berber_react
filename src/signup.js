import React from "react";
import { Link } from "react-router-dom";

const Signup = ({firstname,lastname,email,phone,password,setFirstname,setLastname,setEmail,setPhone,setPassword,handleSubmit}) => {
  return (
    <section className="login-box">
      <h2>Kayıt OL</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" required value={firstname} onChange={e => setFirstname(e.target.value)}/>
          <label>İsim</label>
        </div>
        <div className="user-box">
          <input type="text" required value={lastname} onChange={e => setLastname(e.target.value)}/>
          <label>Soyisim</label>
        </div>
        <div className="user-box">
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
          <label>E-posta</label>
        </div>
        <div className="user-box">
          <input className="inputPhone" type="text" required id="inputPhone" value={phone} onChange={e => setPhone(e.target.value)}/>
          <label id="labelPhone">Telefon numarası</label>
        </div>
        <div className="user-box">
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
          <label>Şifre</label>
        </div>
        {/* <div className="user-box">
          <input type="password" />
          <label>Şifre Doğrulama</label>
        </div> */}
        <div className="link-container">
          <button className="kayıtbtn" type="submit">
            Kayıt ol
          </button>
          <p>
            Hesabın var mı?{" "}
            <Link className="girisbtn" to="/login">
              Giriş yap
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Signup;

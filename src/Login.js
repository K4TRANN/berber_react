import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendedUser = {
      "email":email,
      "password":password
    }

    try {
      const response = await axios.post("http://localhost:5000/login",sendedUser);
      setEmail("");
      setPassword("");
    // navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="login-box">
      <h2>Giriş Yap</h2>
      <form>
        <div className="user-box">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>E-posta</label>
        </div>
        <div className="user-box">
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Şifre</label>
        </div>
        <div className="link-container">
          <button className="girisbtn" onClick={handleSubmit}>
            Giriş Yap
          </button>
          <p>
            Hesabın yok mu? <Link to="/signup">Kayıt Ol</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;

import "./Login.css"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "../../api/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendedUser = {
      "email":email,
      "password":password
    }

    try {
      const response = await axios.post("/login",sendedUser,{withCredentials:true});
      const { accessToken } = response.data;

      localStorage.setItem("accessToken", accessToken);
      navigate("/");
      window.location.reload();

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("GİRİŞ BAŞARILISIZ: ",error.response?.data || error.message);
    }
  }
  return (
    <section className="login-box">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>E-posta</label>
        </div>
        <div className="user-box">
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Şifre</label>
        </div>
        <div className="link-container">
          <button className="girisbtn">
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

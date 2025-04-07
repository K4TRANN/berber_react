import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [users,setUsers] = useState([]);
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [hasValueEmail,setHasValueEmail] = useState(false);


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      "firstname":firstname,
      "lastname":lastname,
      "email":email,
      "phone":phone,
      "password":password
    }

    try {
      const response = await axios.post("http://localhost:5000/register",newUser)
      setUsers([...users,response.data]);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
  }
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
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setHasValueEmail(true)} onBlur={(e) => setHasValueEmail(e.target.value !== "")}/>
          <label className={hasValueEmail ? "floatLabel" : ""}>E-posta</label>
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
          <button className="girisbtn" type="submit">
            Kayıt ol
          </button>
          <p> Hesabın var mı?{" "}<button><Link className="girisbtn" to="/login">Giriş yap</Link> </button></p>
        </div>
      </form>
    </section>
  );
};

export default Signup;

import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Konum from "./Konum";
import Login from "./Login";
import Prices from "./Prices";
import Signup from "./signup";
import {Route,Routes} from "react-router-dom"
 
function App() {
  const [users,setUsers] = useState([]);
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      "firstname":firstname,
      "lastname":lastname,
      "email":email,
      "phone":phone,
      "password":password
    }

    setUsers([...users,newUser]);
    console.log(users);
  }

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/konum" element={<Konum />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/prices" element={<Prices />}/>
      <Route path="/signup" element={<Signup
      firstname = {firstname}
      lastname = {lastname}
      email = {email}
      phone = {phone}
      password = {password}
      setFirstname = {setFirstname}
      setLastname = {setLastname}
      setEmail = {setEmail}
      setPhone = {setPhone}
      setPassword = {setPassword}
      handleSubmit={handleSubmit}
      />}/>
    </Routes>
    </div>
  );
}

export default App;

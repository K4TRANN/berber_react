import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Konum from "./Konum";
import Login from "./Login";
import Prices from "./Prices";
import Signup from "./signup";
import {Route,Routes} from "react-router-dom"
 
function App() {
  

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/konum" element={<Konum />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/prices" element={<Prices />}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;

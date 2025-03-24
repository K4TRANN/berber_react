import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Konum from "./component/Konum/Konum";
import Login from "./component/Login/Login";
import Prices from "./component/Prices/Prices";
import Signup from "./component/Signup/signup";
import Date from "./component/Date/DateComponent";
import ProtectedRoute from "./ProtectedRoute";
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
        <Route element={<ProtectedRoute />}>
          <Route path="/date" element={<Date />}></Route>
        </Route>
      </Routes>    
    </div>
  );
}

export default App;

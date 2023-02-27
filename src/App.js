
import './App.css';
import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import SC from "./pages/SC"
import ClubDiv from "./pages/ClubDiv"
import Uclub from "./pages/Uclub"
import Sclub from "./pages/Sclub"
import Tech from "./pages/Tech"
import Login from "./pages/Login"


import {BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/Home" element={<Home/>}/>
       <Route exact path="/SC" element={<SC/>}/>
       <Route exact path="/ClubDiv" element={<ClubDiv/>}/>
       <Route exact path="/Uclub" element={<Uclub/>}/>
       <Route exact path="/Sclub" element={<Sclub/>}/>
       <Route exact path="/Tech" element={<Tech/>}/>
       <Route exact path="/Login" element={<Login/>}/>
       
       
      </Routes>
      
      <Footer/>
    </Router>
      
    </div>
  );
}

export default App;

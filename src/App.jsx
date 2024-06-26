import "./App.css";
import PageLayout from "./components/PageLayout/PageLayout";
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membership from "./components/Membership/Membership";
import Gettheapp from "./components/GetTheApp/Gettheapp";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import Joinnow from "./components/JoinNow/Joinnow";
import Airports from "./components/Airports/Airports";

function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membershipbenefits" element={<Membership />} />     
            <Route path="/gettheapp" element={<Gettheapp />} /> 
            <Route path="/aboutus" element={<AboutUs />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/joinnow" element={<Joinnow />} /> 
            <Route path="/airports" element={<Airports />} /> 
          </Routes>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;

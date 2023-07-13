// import Login from './components/login';

import Card from "./components/card";
// import Data from "./components/data";
import Entry from "./components/entry";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Cart from "./components/cart";
import Signin from "./components/signin";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      {/* <Entry /> */}

      <Routes>
        <Route path="/" element={<Entry></Entry>}></Route>
        <Route path="/home" element={<Entry></Entry>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signin></Signin>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

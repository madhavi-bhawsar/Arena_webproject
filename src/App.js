import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import My_Blog from "./components/my-blog";
import Grievance_Page from "./components/Grievance";
import Home from "./components/home";
import Login from "./components/login";
import Guide from "./components/guide";
import Events_View from "./components/events_view";
import Blog_View from "./components/blog_view";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/Grievance" element={<Grievance_Page />}></Route>
        <Route exact path="/blogcreate" element={<My_Blog />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/guide" element={<Guide />}></Route>
        <Route exact path="/events_view" element={<Events_View />}></Route>
        <Route exact path="/Blog_view" element={<Blog_View />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

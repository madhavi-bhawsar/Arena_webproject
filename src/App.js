
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/navigationbar";
import My_Blog from "./components/my-blog";
import Grievance_Page from "./components/Grievance";
import Home from "./components/home";
import Login from "./components/login";
import Guide from "./components/guide";
import Events_View from "./components/events_view";
import Events from "./components/event";
import Blog_View from "./components/blogitem";
import Blog from "./components/blogtrial";
import Demo from "./components/slide_carousel";
import Payments from "./components/payments";
import Paying from "./components/paying";
import Test from "./components/test";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigationbar />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/Grievance" element={<Grievance_Page />}></Route>
        <Route exact path="/blogcreate" element={<My_Blog />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/guide" element={<Guide />}></Route>
        <Route exact path="/events_view" element={<Events_View />}></Route>
        <Route exact path="/event" element={<Events />}></Route>
        <Route exact path="/Blogview" element={<Blog_View />}></Route>
        <Route exact path="/Blog" element={<Blog />}></Route>
        <Route exact path="/demo" element={<Demo />}></Route>
        <Route exact path="/payments" element={<Payments />}></Route>
        <Route exact path="/paying" element={<Paying />}></Route>
        <Route exact path="/test" element={<Test />}></Route>
      </Routes>
    </Router>
  );
}
export default App;

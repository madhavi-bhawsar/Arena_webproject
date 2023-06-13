
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./components/landing-page";
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
import Fetch from "./fetch";
import Election from "./components/election";
import Campaign from "./components/elect_Campaign";
import Vote from "./components/elect_vote";
import Current from "./components/elect_current";
import Authorities from "./components/authorities";
import Results from "./components/elect_results";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Front />}></Route>
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
        <Route exact path="/election" element={<Election />}></Route>
        <Route exact path="/campaign" element={<Campaign />}></Route>
        <Route exact path="/vote" element={<Vote />}></Route>
        <Route exact path="/current" element={<Current />}></Route>
        <Route exact path="/authorities" element={<Authorities />}></Route>
        <Route exact path="/results" element={<Results />}></Route>
        <Route exact path="/fetch" element={<Fetch />}></Route>
        <Route exact path="/candidates"></Route>
      </Routes>
    </Router>
  );
}
export default App;

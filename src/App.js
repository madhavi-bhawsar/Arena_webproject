
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./components/landing-page";
import Signup from "./backend/signup";
import My_Blog from "./components/my-blog";
import Grievance_Page from "./components/Grievance";
import Home from "./components/home";
import Login from "./components/login";
import Events from "./components/events";
import Events_View from "./components/events_view";
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
import Profile from "./components/profile.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Front />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/Grievance" element={<Grievance_Page />}></Route>
        <Route exact path="/blogcreate" element={<My_Blog />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/blog/:id" element={<Blog_View />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
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
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/candidates"></Route>
        <Route exact path="/users"></Route>
        <Route exact path="/events" element={<Events/>} />
      <Route path="/events/:id" element={<Events_View/>} />
      </Routes>
    </Router>
  );
}
export default App;

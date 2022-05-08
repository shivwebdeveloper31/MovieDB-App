import React from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Upcoming from "./Upcoming";
import Cast from "./Cast";
import TopRated from "./TopRated";
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/toprated" element={<TopRated />} />
      </Routes>
    </div>
  );
}

export default App;

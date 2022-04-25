import React, { useState } from "react";
import "./App.css";
import Pokemonapi from "./components/pokemonapi/pokemon";
import Maintodo from "./components/todoapp/maintodo";
import { Routes, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  return (
    <div className="app">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Link to="/">Home</Link>

      <br></br>
      <Link to="/pokemonapi">pokemonapi</Link>
      <br></br>
      <Link to="/Maintodo">to do</Link>

      <Routes>
        <Route path="/pokemonapi" element={<Pokemonapi />}></Route>
        <Route path="/Maintodo" element={<Maintodo />}></Route>
      </Routes>
    </div>
  );
};

export default App;

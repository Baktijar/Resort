import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/" component={Rooms} />
      <Route path="/" component={SingleRoom} />
      <Route path="/" component={Error} />
    </>
  );
}

export default App;

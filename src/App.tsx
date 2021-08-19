import { registerRootComponent } from "expo";
import React from "react";
// routes
import Router from "./route";

function App() {
  return <Router />;
}

registerRootComponent(App);

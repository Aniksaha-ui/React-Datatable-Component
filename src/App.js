import "./App.css";
import CountriesTables from "./Components/Country/CountriesTables";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <>
      <div className="App">
        <CountriesTables />
      </div>
    </>
  );
}

export default App;

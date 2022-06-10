import "./App.css";
import CountriesTables from "./Components/Country/CountriesTables";
import { useEffect, useState } from "react";

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

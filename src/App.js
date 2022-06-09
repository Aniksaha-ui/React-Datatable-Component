import logo from "./logo.svg";
import "./App.css";
import CountriesTables from "./Components/Country/CountriesTables";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div className="App">
        <h1>React Datatable -{countries.length}</h1>
        <CountriesTables />
      </div>
    </>
  );
}

export default App;

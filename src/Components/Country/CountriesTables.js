import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const CountriesTables = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "country name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
      sortable: true,
    },
    {
      name: "Country Flag",
      selector: (row) => (
        <img width={50} height={50} src={row.flag} alt="country flag" />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => {
            alert(row.alpha2Code);
          }}
          className="btn-primary"
        >
          Show more
        </button>
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>React Datatable -{countries.length}</h1>
      <DataTable
        title="All countries over the world"
        columns={columns}
        data={countries}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control w-25"
            type="text"
            placeholder="Enter anything"
          />
        }
      />
    </div>
  );
};

export default CountriesTables;

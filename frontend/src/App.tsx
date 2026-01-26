import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortofolio from './Components/Portofolio/ListPortofolio/ListPortofolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';



function App() {
  const [search, setSearch] = useState<string>("");
  const [portofolioValues, setPortofolioValues] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value);
    console.log(e);
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portofolioValues.find((value) => value === e.target[0].value);
    if (exists) {
      console.log("Portfolio already exists");
      return;
    }
    const updatedPortofolio = [...portofolioValues, e.target[0].value];
    setPortofolioValues(updatedPortofolio);
  }

  const onPortofolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portofolioValues.filter((value) => 
      value !== e.target[0].value);
    setPortofolioValues(removed);
  }
  const OnSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    // console.log("Result from API call: ", result);
    if (typeof result === "string") {
      setServerError(result);
      console.log("Server error: ", serverError);
    }
    else if(Array.isArray(result)){
      setSearchResults(result as CompanySearch[]);
      console.log(searchResults);
      // console.log("Search results: ", searchResults);
    }
    else{
      console.log("Nu a intrat in niciun if");
    }
  };
  
  return (
    <div className="App">

      <Navbar />
      {/* <Hero /> */}
      <Search  
        OnSearchSubmit={OnSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />

      {serverError && <div><h1>Unable to connect to API</h1></div>}
      
      <ListPortofolio portofolioValues={portofolioValues} onPortofolioDelete={onPortofolioDelete}/>

      <CardList 
      searchResults={searchResults}
      onPortofolioCreate={onPortfolioCreate}
      />

    </div>
  );
}

export default App;

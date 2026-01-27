import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import ListPortofolio from '../../Portofolio/ListPortofolio/ListPortofolio'
import CardList from '../../CardList/CardList'
import { CompanySearch } from '../../../company';
import { searchCompanies } from '../../../api';

interface Props {

}

const SearchPage = (props: Props) => {
    // function OnSearchSubmit(e: SyntheticEvent<Element, Event>): void {
    //     throw new Error('Function not implemented.')
    // }

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
        const exists = portofolioValues.find((value: any) => value === e.target[0].value);
        if (exists) {
            console.log("Portfolio already exists");
            return;
        }
        const updatedPortofolio = [...portofolioValues, e.target[0].value];
        setPortofolioValues(updatedPortofolio);
    }

    const onPortofolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portofolioValues.filter((value: any) => 
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

    return <>
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
    </>
}

export default SearchPage
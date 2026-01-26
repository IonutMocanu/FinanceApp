import React, { JSX } from 'react';
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortofolio from '../Portofolio/AddPortofolio/AddPortofolio';

interface Props {
    id: string;
    searchResults: CompanySearch;
    onPortofolioCreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResults, onPortofolioCreate}: Props): JSX.Element => {
  return (
    <div className="card">
        <img src="https://picsum.photos/100/100" alt="" />
        <div className="details">
            <h2>{searchResults.name}</h2>
            <h4>{searchResults.symbol}</h4>
            <p>${searchResults.currency}</p>
        </div>
        <p className='Infon'>{searchResults.exchange} - {searchResults.exchangeFullName}</p>
        <AddPortofolio onPortofolioCreate={onPortofolioCreate} symbol={searchResults.symbol}/>
    </div>
  )
}

export default Card


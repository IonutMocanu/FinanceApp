import React, { JSX } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props{
  searchResults: CompanySearch[];
  onPortofolioCreate: (e: React.SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResults, onPortofolioCreate}: Props): JSX.Element => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortofolioCreate={onPortofolioCreate} />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  )
}

export default CardList
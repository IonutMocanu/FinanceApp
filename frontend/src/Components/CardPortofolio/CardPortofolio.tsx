import React, { SyntheticEvent } from 'react'
import DeletePortofolio from '../Portofolio/DeletePortofolio/DeletePortofolio';
import { Link } from 'react-router-dom';

interface Props {
    portofolioValues: string;
    onPortofolioDelete: (e: SyntheticEvent) => void;
}

const CardPortofolio = ({portofolioValues, onPortofolioDelete}: Props) => {
  return <>
      <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      
      <Link 
        to={`/company/${portofolioValues}`}
        className="pt-6 text-xl font-bold"
      >
        {portofolioValues}
      </Link>
      
      <DeletePortofolio
        portofolioValue={portofolioValues}
        onPortofolioDelete={onPortofolioDelete}
      />

    </div>
  </>
  
}

export default CardPortofolio
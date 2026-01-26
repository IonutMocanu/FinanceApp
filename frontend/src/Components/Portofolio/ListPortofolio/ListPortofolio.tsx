import React, { SyntheticEvent } from 'react'
import CardPortofolio from '../../CardPortofolio/CardPortofolio';

interface Props {
    portofolioValues: string[];
    onPortofolioDelete: (e: SyntheticEvent) => void;
}

const ListPortofolio = ({portofolioValues, onPortofolioDelete}: Props) => {
  return (
    <>
        <h2>My Portofolio</h2>
        <ul>
            {portofolioValues &&
                portofolioValues.map((value, index) => (
                 <CardPortofolio portofolioValues={value} onPortofolioDelete={onPortofolioDelete}/>
                ))
            }
        </ul>
    </>
  )
}

export default ListPortofolio
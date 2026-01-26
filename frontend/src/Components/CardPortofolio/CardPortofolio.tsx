import React, { SyntheticEvent } from 'react'
import DeletePortofolio from '../Portofolio/DeletePortofolio/DeletePortofolio';

interface Props {
    portofolioValues: string;
    onPortofolioDelete: (e: SyntheticEvent) => void;
}

const CardPortofolio = ({portofolioValues, onPortofolioDelete}: Props) => {
  return <>
    <h4>{portofolioValues}</h4>
    <DeletePortofolio onPortofolioDelete={onPortofolioDelete} portofolioValue={portofolioValues} />
  </>
  
}

export default CardPortofolio
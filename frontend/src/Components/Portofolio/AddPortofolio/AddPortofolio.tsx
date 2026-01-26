import React, { SyntheticEvent } from 'react'

interface Props {
    onPortofolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortofolio = ({onPortofolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPortofolioCreate}>
        <input readOnly={true}  hidden ={true} value={symbol}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddPortofolio
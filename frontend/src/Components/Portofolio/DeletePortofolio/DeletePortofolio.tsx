import React from 'react'

interface Props {
    onPortofolioDelete: (e: React.SyntheticEvent) => void;
    portofolioValue: string;
}

const DeletePortofolio = ({portofolioValue,onPortofolioDelete}: Props) => {
  return (
    <div>
      <form onSubmit={onPortofolioDelete}>
        <input hidden={true} value={portofolioValue} />
        <button>X</button>
      </form>
    </div>
  )
}

export default DeletePortofolio
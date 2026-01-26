import React, { ChangeEvent, JSX, SyntheticEvent, useState } from 'react'

interface Props {
  OnSearchSubmit: (e: SyntheticEvent)=> void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({OnSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={OnSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  )
}

export default Search
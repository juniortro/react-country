import React from 'react';
import { BsSearch } from 'react-icons/bs'

import { ContainerInputSearch, ContainerListBox } from './style'

interface InputProps {
  searchTerm: string;
  setSearchTerm: (e: string) => void;
}

const InputSearch: React.FC<InputProps> = ({ searchTerm, setSearchTerm }) => {

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <ContainerInputSearch>
        <BsSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </ContainerInputSearch>

      <ContainerListBox>
        <select name="region" id="region" placeholder="Filter by Region">
          <option value="">ALL</option>
          <option value="">ASIA</option>
          <option value="">TESTE</option>
        </select>
      </ContainerListBox>
    </>
  )
}

export default InputSearch;
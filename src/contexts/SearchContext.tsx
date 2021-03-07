import { createContext, ReactNode, useState } from 'react';

interface SearchContextData {
  searchTerm: string;
  handleSearchChange: (e: any) => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children, ...rest }: SearchProviderProps) {

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchChange(e: any) {
    setSearchTerm(e.target.value)
  }

  return (
    <SearchContext.Provider value={{
      searchTerm,
      handleSearchChange
    }}>
      {children}
    </SearchContext.Provider>
  )
}




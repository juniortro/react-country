import React, { useEffect, useState } from 'react';
import { getAllCountry } from '../services/api';

import CountryCard from '../components/CountryCard/index'
import Header from '../components/Header/index';
import InputSearch from '../components/InputSearch';

import { HomeContainer } from '../styles/Home';

interface CountryProps {
  name: string,
  capital: string,
  flag: string,
  population: number,
  region: string,
}

const Home: React.FC = () => {
  const url = "https://restcountries.eu/rest/v2/all"
  const [countryData, setCountryData] = useState([] as Array<CountryProps>);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchCountry() {
      let response = await getAllCountry(url)
      await setCountryData(response)
    }
    fetchCountry()
  }, [])

  const filteredCountry = countryData.filter(country => {
    if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return country;
    } else {
      return 0;
    }
  });


  return (
    <>
      <Header />
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HomeContainer>



        {searchTerm ? (
          <>
            {filteredCountry.map(country => {
              return <CountryCard
                name={country.name}
                key={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            })
            }
          </>


        ) : (
          countryData.map(country => {
            return (
              <CountryCard
                name={country.name}
                key={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            )
          })
        )}

      </HomeContainer>
    </>
  )

}
export default Home;
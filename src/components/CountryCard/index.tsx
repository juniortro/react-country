import React from 'react';
import { Container, ContainerData } from './styles'

interface CountryCardData {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const CountryCard: React.FC<CountryCardData> = ({ name, population, region, capital, flag }) => {
  return (
    <Container>
      <img src={flag} alt="" />
      <ContainerData>
        <h1>{name}</h1>
        <p><span>Population: </span>{population.toLocaleString('pt-br')}</p>
        <p><span>Region: </span>{region}</p>
        <p><span>Capital: </span>{capital}</p>
      </ContainerData>
    </Container>
  )
}

export default CountryCard;
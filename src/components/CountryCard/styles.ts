import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 30rem;
  width: 14.25rem;
  > img { 
    max-width: 260px;
  }
`;


export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;

  background-color: #fff;
  height: 13rem;
  width: 100%;

  h1 {
    font-size: .9rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: .7rem;
    padding-bottom: .5rem;
  }

  p:last-child {
    padding-bottom: 2rem;
  }

  span {
    font-weight: 600;
  }
`;
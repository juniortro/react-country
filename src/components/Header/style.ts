import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0px 2px 10px #DDD;

  display: flex;
  justify-content: space-between;
  padding: 0 9rem;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media(max-width: 650px) {
      justify-content: center;
      position: relative;
    }

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;

    @media(max-width: 650px) {
        font-size: 1rem;
      }
  }


  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 20px;
    min-width: 6.2rem;
    border: none;
    cursor: pointer;
    font-weight: bold;

    > :first-child {
      padding-top: 2px;
    }
  }
`;
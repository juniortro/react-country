import React from 'react';
import { FaMoon } from 'react-icons/fa'

import { HeaderContainer } from './style'


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <a href="http://localhost:3000/">Where in the world?</a>

      <button>
        <FaMoon />
        <span>Dark Mode</span>
      </button>

    </HeaderContainer>
  )
}

export default Header;
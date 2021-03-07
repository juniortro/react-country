import React from 'react';
import GlobalStyle from './styles/global';

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;

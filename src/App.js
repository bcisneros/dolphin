import React from 'react';

import StockSearch from './components/StockSearch';
import StockList from './components/StockList';
import StockGraph from './components/StockGraph';

function App() {
  return (
    <div className="App">
      <h1>Dolphin</h1>
      <StockSearch />
      <StockList />
      <StockGraph />
    </div>
  );
}

export default App;

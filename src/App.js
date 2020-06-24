import React, { useState, useEffect } from 'react';

import StockSearch from './components/StockSearch';
import StockList from './components/StockList';
import StockGraph from './components/StockGraph';

const initialStocks = [
  {
    description: 'AGILENT TECHNOLOGIES INC',
    displaySymbol: 'A',
    symbol: 'A',
  },
  {
    description: 'ALCOA CORP',
    displaySymbol: 'AA',
    symbol: 'AA',
  },
  {
    description: 'PERTH MINT PHYSICAL GOLD ETF',
    displaySymbol: 'AAAU',
    symbol: 'AAAU',
  },
];

function App() {
  const handleSearch = symbol => {
    console.log(symbol);
    setStocks([
      ...stocks,
      { symbol, description: symbol, displaySymbol: symbol },
    ]);
  };
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    setStocks(initialStocks);
  }, []);

  return (
    <div className="App">
      <h1>Dolphin</h1>
      <StockSearch onSearch={handleSearch} />
      <StockList stocks={stocks} />
      <StockGraph />
    </div>
  );
}

export default App;

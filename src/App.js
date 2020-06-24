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
];

function App() {
  const handleSearch = symbol => {
    const stock = stockCatalog
      .filter(stock => !stocks.map(s => s.symbol).includes(stock.symbol))
      .find(stock => stock.symbol === symbol);

    if (stock) {
      setStocks([...stocks, stock]);
    }
  };

  const [stocks, setStocks] = useState([]);
  const [stockCatalog, setStockCatalog] = useState([]);

  useEffect(() => {
    setStockCatalog([
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
    ]);
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

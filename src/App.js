import React, { useState, useEffect } from 'react';

import StockSearch from './components/StockSearch';
import StockList from './components/StockList';
import StockGraph from './components/StockGraph';

const getStoredStocks = () => {
  const stocks = window.localStorage.getItem('stocks');

  if (stocks) return JSON.parse(stocks);

  return [];
};

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
    const fetchCatalog = async () => {
      const result = await fetch(
        'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=brpd4dnrh5rf069mbr40'
      );
      const data = await result.json();
      setStockCatalog(data);
    };

    fetchCatalog();
    const initialStocks = getStoredStocks();
    setStocks(initialStocks);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('stocks', JSON.stringify(stocks));
  }, [stocks]);

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

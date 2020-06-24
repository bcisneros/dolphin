import React, { useState, useEffect, useRef } from 'react';

import StockSearch from './components/StockSearch';
import StockList from './components/StockList';
import StockGraph from './components/StockGraph';

const socket = new WebSocket('wss://ws.finnhub.io?token=brpd4dnrh5rf069mbr40');

const getStoredStocks = () => {
  const stocks = window.localStorage.getItem('stocks');

  if (stocks) return JSON.parse(stocks);

  return {};
};

function App() {
  const [stocks, _setStocks] = useState({});

  const stockRef = useRef(stocks);
  const setStocks = data => {
    stockRef.current = data;
    _setStocks(data);
  };

  const handleSearch = symbol => {
    const stock = stockCatalog
      .filter(stock => stocks[stock.symbol] === undefined)
      .find(stock => stock.symbol === symbol);

    if (stock) {
      setStocks({ ...stocks, [`${symbol}`]: stock });

      socket.send(JSON.stringify({ type: 'subscribe', symbol }));
    }
  };

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

    socket.addEventListener('message', event => {
      const data = JSON.parse(event.data);
      if (data.type === 'trade') {
        const symbol = data.data[0].s;

        const stock = stockRef.current[`${symbol}`];

        if (stock) {
          stock.price = data.data[0].p;

          setStocks({ ...stockRef.current, [`${symbol}`]: stock });
        }
      }
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('stocks', JSON.stringify(stocks));
  }, [stocks]);

  const stockList = Object.keys(stocks).map(k => stocks[k]);

  return (
    <div className="App">
      <h1>Dolphin</h1>
      <StockSearch onSearch={handleSearch} />
      <StockList stocks={stockList} />
      <StockGraph />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StockSearch = ({ onSearch }) => {
  const [symbol, setSymbol] = useState('');
  const handleSymbolChanged = e => {
    setSymbol(e.target.value);
  };

  return (
    <div>
      <h2>Stock Search</h2>
      <div>
        <label>Enter the Stock Symbol</label>
        <input type="text" onChange={handleSymbolChanged} value={symbol} />
        <button
          onClick={() => {
            onSearch(symbol);
            setSymbol('');
          }}
          disabled={!symbol}
        >
          Search
        </button>
      </div>
    </div>
  );
};

StockSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default StockSearch;

import React from 'react';
import PropTypes from 'prop-types';

const StockList = ({ stocks }) => {
  return (
    <div>
      <h2>Stock List</h2>

      {stocks.map(stock => (
        <div key={stock.symbol}>{stock.description}</div>
      ))}
    </div>
  );
};

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
};

export default StockList;

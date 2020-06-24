import React from 'react';
import PropTypes from 'prop-types';
import StockDetail from './StockDetail';

const StockList = ({ stocks }) => {
  return (
    <div>
      <h2>Stock List</h2>

      {stocks.map(stock => (
        <StockDetail stock={stock} key={stock.symbol} />
      ))}
    </div>
  );
};

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
};

export default StockList;

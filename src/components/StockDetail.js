import React from 'react';
import PropTypes from 'prop-types';

const stockStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px',
};

const StockDetail = ({ stock }) => {
  return (
    <div style={stockStyle}>
      <h3>{stock.symbol}</h3>
      {stock.description}
    </div>
  );
};

StockDetail.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default StockDetail;

import React from 'react';
import ReactDOM from 'react-dom';
import Transactions from './transactions'

ReactDOM.render(
  <Transactions />,
  document.getElementById('app')
);

module.hot.accept();
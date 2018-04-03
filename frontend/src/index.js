import React from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Body from './containers/Body';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Body />
  </React.Fragment>,
  document.getElementById('root')
);

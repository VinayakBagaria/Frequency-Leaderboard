import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Body } from './containers';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Body />
  </React.Fragment>,
  document.getElementById('root')
);

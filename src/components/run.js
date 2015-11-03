/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
*/
let React = require('react');
//let ReactDOM = require('react-dom');
let App = require('./Main');
let injectTapEventPlugin = require('react-tap-event-plugin');

// Render the main component into the dom
React.render(<App />, document.getElementById('app'));

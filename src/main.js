"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var History = ReactRouter.hashHistory;
var routes = require('./routes');

ReactDOM.render(<Router history={History} routes={routes}/>, document.getElementById('app'))
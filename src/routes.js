"use strict";

var React = require('react');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
    <Route path="/" component={require('./components/app')}>
        <IndexRoute component={require('./components/homePage')}/>
        <Route path="authors" component={require('./components/authors/authorsPage')}/>
        <Route path="author" component={require('./components/authors/manageAuthorsPage')}/>
        <Route path="about" component={require('./components/about/aboutPage')}/>
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
        <Redirect from="awthors" to="authors"/>
        <Route path="*" component={require('./components/notFoundPage')}/>
    </Route>
);

module.exports = routes;
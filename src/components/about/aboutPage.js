"use strict";

var React = require('react');

var About = React.createClass({
    propTypes: {
        route: React.PropTypes.object.isRequired
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount: function(){
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },
    routerWillLeave: function () {
        return 'Are you sure you want to leave a page that is this exciting?'
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses the following technologies:</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        )
    }
});

var HandleEnter = function (location, replaceWith, callback) {
    if (!confirm('Are you sure you want to read a page that is this boring?')) {
        replaceWith.abort();
    } else {
        callback();
    }
};

module.exports = { Component: About, HandleEnter : HandleEnter} ;
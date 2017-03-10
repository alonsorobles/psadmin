"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthors = React.createClass({
    render: function() {
        return (
            <AuthorForm />
        )
    }
});

module.exports = ManageAuthors;
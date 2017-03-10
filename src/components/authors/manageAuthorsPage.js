"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthors = React.createClass({
    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''}
        }
    },

    handleChange: function (event) {
        var field = event.target.name;
        var value = event.taget.value;
        var author = this.state.author;

        author[field] = value;

        this.setState({author: author});
    },

    render: function () {
        return (
            <AuthorForm author={this.state.author}
                        onChange={this.handleChange}/>
        )
    }
});

module.exports = ManageAuthors;
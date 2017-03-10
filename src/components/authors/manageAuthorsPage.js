"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorAPI = require('../../api/authorApi');

var ManageAuthors = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''}
        }
    },

    handleChange: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        var author = this.state.author;

        author[field] = value;

        this.setState({author: author});
    },

    handleSave: function (event) {
        event.preventDefault();
        AuthorAPI.saveAuthor(this.state.author);
        this.context.router.push("authors");
    },

    render: function () {
        return (
            <AuthorForm author={this.state.author}
                        onChange={this.handleChange}
                        onSave={this.handleSave}/>
        )
    }
});

module.exports = ManageAuthors;
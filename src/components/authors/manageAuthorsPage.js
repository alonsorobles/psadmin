"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorAPI = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthors = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {}
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
        if (!this.authorFormIsValid()) {
            return;
        }
        AuthorAPI.saveAuthor(this.state.author);
        toastr.success('Author saved.');
        this.context.router.push("authors");
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        var errors = {};

        if (this.state.author.firstName.length < 3) {
            errors.firstName = 'First name must be at least 3 characters.'
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            errors.lastName = 'Last name must be at least 3 characters.'
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    },

    render: function () {
        return (
            <AuthorForm author={this.state.author}
                        onChange={this.handleChange}
                        onSave={this.handleSave}
                        errors={this.state.errors}/>
        )
    }
});

module.exports = ManageAuthors;
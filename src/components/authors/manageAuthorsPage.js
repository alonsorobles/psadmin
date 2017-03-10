"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorAPI = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthors = React.createClass({
    propTypes: {
        route: React.PropTypes.object.isRequired,
        params: React.PropTypes.object
    },

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentWillMount: function(){
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        );

        var authorId = this.props.params.id;
        if (authorId) {
            this.setState({author: AuthorAPI.getAuthorById(authorId)});
        }
    },

    routerWillLeave: function () {
        if (this.state.isDirty) {
            return 'Leave without saving?'
        }
    },

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            isDirty: false
        }
    },

    handleChange: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        var author = this.state.author;

        author[field] = value;

        this.setState({author: author, isDirty: true});
    },

    handleSave: function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        this.setState({isDirty: false}, function () {
            AuthorAPI.saveAuthor(this.state.author);
            toastr.success('Author saved.');
            this.context.router.push("authors");
        });
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
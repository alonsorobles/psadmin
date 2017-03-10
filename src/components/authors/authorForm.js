"use strict";

var React = require('react');

var AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <h2>Manage Author</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                           name="firstName"
                           className="form-control"
                           placeholder="First Name"
                           ref="firstName"
                           value=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                           name="lastName"
                           className="form-control"
                           placeholder="Last Name"
                           ref="lastName"
                           value=""/>
                </div>
                <input type="submit"
                       value="Save"
                       className="btn btn-default"/>
            </form>
        )
    }
});

module.exports = AuthorForm;
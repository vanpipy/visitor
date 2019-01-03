'use strict';

const db = require('../db');

module.exports = {
    getUser: function (name) {
        const users = db.get('users');
        return users.find({ name }).value();
    },
    getUsers: function () {
        return db.get('users').value()
    }
};


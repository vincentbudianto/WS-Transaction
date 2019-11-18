'use strict';

let response = require('./response');
let connection = require('./connection');

exports.index = function (req, res) {
	response.ok("Transactions web services", res)
};

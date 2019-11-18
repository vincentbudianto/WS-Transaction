'use strict';

let response = require('./response');
let connection = require('./connection');

exports.index = function (req, res) {
	response.ok("Transactions web services", res)
};

exports.getRatingReview = function (req, res) {
	let movie_id = req.params.movie_id;

	connection.query(
    "SELECT * FROM transactions_history WHERE movieID = ? AND status = 'Success'",
    [movie_id],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
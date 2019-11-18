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

exports.getSeat = function (req, res) {
	let movie_id = req.params.movie_id;
	let date = req.params.date;
	let time = req.params.time;

	connection.query('SELECT seatNumber FROM transactions_history WHERE movieID = ? and historyDate = ? and historyTime = ? and (status = "Pending" or status = "Success")', [movie_id, date, time], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	});
};
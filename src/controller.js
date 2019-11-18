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

exports.addTransaction = function (req, res) {
	let user_id = req.body.user_id;
	let account_number = req.body.account_number;
	let virtual_number = req.body.virtual_number;
	let movie_id = req.body.movie_id;
	let date = req.body.date;
	let time = req.body.time;
	let seat = req.body.seat;
	let price = req.body.price;
	let status = req.body.status;

	connection.query('INSERT INTO transactions_history (userID, accountNumber, virtualNumber, movieID, historyDate, historyTime, seatNumber, price, status) values (?,?,?,?,?,?,?,?,?)', [user_id, account_number, virtual_number, movie_id, date, time, seat, price, status], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	});
};
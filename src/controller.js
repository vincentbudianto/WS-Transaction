'use strict';

let response = require('./response');
let connection = require('./connection');

exports.index = function (req, res) {
	response.ok("Transactions web services", res)
};

exports.getRatingReview = function (req, res) {
	let movie_id = req.params.movie_id;

	connection.query("SELECT * FROM transactions_history WHERE movieID = ? AND status = 'Success'", [movie_id], function(error, rows, fields) {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
    });
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

exports.getTransaction = function (req, res) {
	let transaction_id = req.params.transaction_id;

	connection.query('SELECT * FROM transactions_history WHERE transactionID = ?', [transaction_id], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	});
};

exports.getUserTransactions = function (req, res) {
	let user_id = req.params.user_id;

	connection.query('SELECT * FROM transactions_history WHERE userID = ?', [user_id], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	});
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

exports.updateRatingReview = function (req, res) {
	let rating = req.body.rating;
	let review = req.body.review;
	let transaction_id = req.params.transaction_id;

	connection.query('UPDATE transactions_history SET userRate = ?, userReview = ? WHERE transactionID = ?', [rating, review, transaction_id], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res);
		}
	});
};

exports.updateTransactionStatus = function (req, res) {
	let transaction_id = req.body.transaction_id;
	let status = req.body.status;

	connection.query('UPDATE transactions_history SET status = ? WHERE transactionID = ?', [status, transaction_id], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res);
		}
	});
};

exports.deleteRatingReview = function (req, res) {
	let transaction_id = req.params.transaction_id;

	connection.query('UPDATE transactions_history SET userRate = NULL, userReview = NULL WHERE transactionID = ?', [transaction_id], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res);
		}
	});
};

exports.deleteTransaction = function (req, res) {
	let user_id = req.body.user_id;
	let movie_id = req.body.movie_id;
	let date = req.body.date;
	let time = req.body.time;
	let seat = req.body.seat;

	connection.query('DELETE FROM transactions_history WHERE userID = ? AND movie_id = ? AND historyDate = ? AND historyTime = ? AND seatNumber = ?', [status, user_id, movie_id, date, time, seat], function (error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res);
		}
	});
};
'use strict';

module.exports = function (app) {
	var todoList = require('./controller');

	app.route('/')
		.get(todoList.index);

	app.route('/web_service_transactions/movie_id/:movie_id')
		.get(todoList.getRatingReview);

	app.route('/web_service_transactions/movie_id/:movie_id/date/:date/time/:time')
		.get(todoList.getSeat);

	app.route('/web_service_transactions/transaction_id/:transaction_id')
		.get(todoList.getTransaction);

	app.route('/web_service_transactions/user_id/:user_id')
		.get(todoList.getUserTransactions);

	app.route('/web_service_transactions')
		.post(todoList.addTransaction);

	app.route('/web_service_transactions')
		.put(todoList.updateTransactionStatus);
};
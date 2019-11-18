let mysql = require('mysql');

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "ticket_transactions"
});

con.connect(function (err) {
	if (err) throw err;
});

module.exports = con;
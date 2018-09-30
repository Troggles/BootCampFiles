
// sets required files
var inquirer = require('inquirer');
var mysql = require('mysql');

// establishes MySql connection 
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: '',
    database: 'Bamazon'
});

// parses input to be positive intgers only 
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}


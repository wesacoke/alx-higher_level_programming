#!/usr/bin/node

const fs = require('fs');

fs.wirterFile(process.argv[2], process.argv[3], 'utf-8',
	fuction (err) {
		if (err) {
			console.log(err);
		}
	});
const express = require('express');
const app = express();

const mockUserData=[
{name: 'Mark'},
{name: 'Jill'}
]

app.get('/user', function(req, res) {
	console.log(req.params.id)
	res.json({
		success: true, 
		message: 'got one user',
		users: req.params.id
	})
})

app.listen(8000, function() {
console.log("server is running")
})



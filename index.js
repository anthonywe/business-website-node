var express = require ( 'express' )
var app = express ( )


app.get('/messages', function ( req, res ) {
	res.send ( req.query.message_1 + " " + req.query.message_2 )
});

app.use(express.static('public'));

app.listen ( 3000 )
const express 			= require('express');
const app				= express();
const bodyParser		= require('body-parser');
const path				= require('path');

const api 				= require('./server/routes/api');
const index 			= require('./server/routes/index');

const port 				= 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api', api);
app.use('/', index);

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname + "/public/html/pageNotFound.html"));

	let object = {"name" : "Amey", "rollnumber" : "1511092"};

	res.json(object);
});

app.listen(port, (req,res) => {
	console.log("Running on port: " + port);

});
const express 			= require('express');
const app				= express();
const bodyParser		= require('body-parser');
const path				= require('path');

const port 				= 3000;

const api 				= require('./server/routes/api');
const index 			= require('./server/routes/index');
const cookieParser		= require('cookie-parser');

app.use(express.static(path.join(__dirname , "public")));

app.use(bodyParser.urlencoded({"extended" : true}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use('/' , index);
app.use('/api', api);

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname + "/public/html/pageNotFound.html"));
});

app.listen(port, function(){
	console.log("Server running on port: " + port);
});


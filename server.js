const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// @Boilerplate
const app = express();
const PORT = process.env.PORT || 4020;

//parse app /x-www-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse app JSON
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT,function(){
	console.log("App is listening in port 4020")
})


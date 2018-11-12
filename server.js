// const express = require('express');
// const app = express();
// const fileUpload = require('express-fileupload');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// // Custom modules
// const myClasses = require('./myclasses.js');
// const tools = require('./testtools.js');
// const db = require('./db.js')

// var home = require('./routes/home.js');

// app.use(express.static(__dirname + '/src'));
// app.use("/src", express.static(__dirname + '/src'));
// app.use(bodyParser.urlencoded({extended:true}));
// app.use (bodyParser.json());

// app.set('view engine', 'ejs');

// ////// GET methods ///////////

// // app.get('/', function(req, res) {
// //   res.sendFile(__dirname + "/src/index.html");
// // });
// app.get('/', home.index)
// app.get('/mymaps', function(req, res) {
//   res.sendFile(__dirname + "/src/mymaps.html");
// });
// app.get('/about', function(req, res) {
//   res.sendFile(__dirname + "/src/about.html");
// });
// app.get('/mappage', function(req, res) {
//   res.sendFile(__dirname + "/src/map.html");
// });
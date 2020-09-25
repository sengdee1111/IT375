const express = require('express');
const app = express();

const restaurantsRouter = require('./routes/restaurants');
const path = require('path');
const indexRouter = require('./routes/index');


const port = process.env.PORT || 8000;

const logger = require('./middleware/logger');
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
// Custom Middleware
app.use(logger);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/restaurants',restaurantsRouter);
app.use('/',indexRouter);

app.listen(port,'127.0.0.1',()=>{
console.log(`Listening to request on port ${port}`);
});
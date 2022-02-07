const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const newsRoutes = require('./routes/news.routes');
const galleryRoutes = require('./routes/gallery.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');

const app = express(); // CREATION DE L'APP

const corsOptions = {
    origin: true,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// JWT
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

// ROUTES
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/gallery', galleryRoutes);

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})
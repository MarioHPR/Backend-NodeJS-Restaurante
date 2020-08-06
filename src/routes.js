const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const VoteController = require('./controllers/VoteController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('imagem'), SpotController.store);

routes.get('/vote', VoteController.index);
routes.post('/vote', VoteController.store);
routes.put('/vote', VoteController.update);
//routes.post('/spots/:spotId/vote', VoteController.store);

module.exports = routes;
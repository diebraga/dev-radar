const {Router} = require('express');   
//  controllers abstract from routes
const DeveloperController = require('./controllers/DeveloperController');
const SearchController = require('./controllers/SearchController');


const routes = Router();   // routes abstract from app 'index'
    // list user, create user 
routes.get('/devs', DeveloperController.index);
routes.post('/devs', DeveloperController.store);
  // list users around
routes.get('/search', SearchController.index);

module.exports = routes;
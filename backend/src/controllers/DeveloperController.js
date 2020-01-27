const axios = require('axios'); 
const Developer = require('../models/Developer');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnection, sendMessage } = require('../websocket');

// query params: req.query most get(filter, organize, pag)...
//route params: req.params most delete,put(find delete or update)...
// body: req.body post,put(create, update register)

    // index, show, store, update, destroy

module.exports = {
  async index(req, res) {   // list users
    const developers = await Developer.find();

    return res.json(developers);
  },


  async store(req, res) {   // will crteate dev/user
    const {github_username, techs, latitude, longitude} = req.body;
  
    let developer = await Developer.findOne({github_username});
     //  evit duplicate users
    if(!developer) {                        // call github api using axios
      const response = await axios.get(`https://api.github.com/users/${github_username}`);
  
      const {name = login, avatar_url, bio} = response.data;
    
      const techsArray = parseStringAsArray(techs);
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    
      developer = await Developer.create({ // register Dev/user
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
      
      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )
  
      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }
      
    return res.json(developer);
  }
};
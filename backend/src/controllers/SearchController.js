const Developer = require('../models/Developer')
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const {latitude, longitude, techs} = req.query;

    const techsArray = parseStringAsArray(techs);
      // user filter
    const developers = await Developer.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 90000,
        }
      }
    })

    return res.json({developers});
  }
};
const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

// mongo shape
const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {   // import location schema
    type: PointSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Developers', DevSchema);
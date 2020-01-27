const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance');

let io;

const connections = []; // saving data in the array 4 test


exports.setupWebsocket = (server) => {
   io = socketio(server);

  io.on('connection', socket => {
    const {latitude, longitude, techs} = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs)
    });

  });
};

// condition if dev around 10km and they have at least 1 same tech
exports.findConnections = (coordinates, techs) => {
  return connections.filter(connections => {
    return calculateDistance(coordinates, connection.coordinates) < 10
      && connection.techs.some(item => techs.includes(item))
  })
}

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
}
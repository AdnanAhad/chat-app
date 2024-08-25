const socketIo = require("socket.io");

let io;

const initializeSocket = (server) => {
  io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("join", (roomId) => {
      socket.join(roomId);
    });

    socket.on("leave", (roomId) => {
      socket.leave(roomId);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

const getIo = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
};

module.exports = { initializeSocket, getIo };

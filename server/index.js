import { Server } from "socket.io";

const io = new Server({
  cors: "http://localhost:3000",
});

let onlineUsers = [];

const addUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  if (onlineUsers.some((user) => user.socketId === socketId)) {
    onlineUsers = onlineUsers.filter((user) => user.socket !== socketId);
  }
};

const getUser = (username) => {
    return onlineUsers.find(user => user.username === username);
}

io.on("connection", (socket) => {
  socket.on("addUser", (username) => {
    addUser(username, socket.id);
  });

  socket.on("sendNotification", ({sender, receiver, type}) => {
    const {socketId} = getUser(receiver);
    io.to(socketId).emit("getNotification",{
        sender,type
    })
  })

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(5000);

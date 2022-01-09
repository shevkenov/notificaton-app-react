import { Server } from "socket.io";

const io = new Server({ 
    cors: "http://localhost:3000"
 });

io.on("connection", (socket) => {
  console.log('someone has connected');

  socket.on("disconnect", () => {
      console.log("user has left")
  })
});

io.listen(5000);
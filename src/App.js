import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Cards";
import data from "./data"

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, [])

  useEffect(() => {
    if(user){
      socket?.emit('addUser', user)
    }
  },[socket, user])

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket}/>
          {
            data.map(userPost => <Card key={userPost.id} userData={userPost} sender={user} socket={socket}/>)
          }
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;

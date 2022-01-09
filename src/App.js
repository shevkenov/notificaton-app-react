import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Cards";
import data from "./data"

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log(socket)
    
  }, [])

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {
            data.map(userPost => <Card key={userPost.id} userData={userPost}/>)
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

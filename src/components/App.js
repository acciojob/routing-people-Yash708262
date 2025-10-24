import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserList users={users} />} />
      <Route path="/users/:id" element={<UserDetail users={users} />} />
    </Routes>
  );
};

export default App;


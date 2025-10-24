
import React from "react";
import './../styles/App.css';
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
   
     <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
   
  )
}

export default App

import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <div>Loading...</div>; 

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetail;

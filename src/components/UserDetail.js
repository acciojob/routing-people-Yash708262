// UserDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    const user = users.find(u => u.id === parseInt(id));

    
    const timer = setTimeout(() => {
      setItem(user);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id, users]);

  return loading ? (
    <div>Loading...</div>
  ) : item ? (
    <div>
      <p>Name: {item.name}</p>
      <p>Username: {item.username}</p>
      <p>Email: {item.email}</p>
      <p>Phone: {item.phone}</p>
      <p>Website: {item.website}</p>
    </div>
  ) : (
    <div>User not found</div>
  );
};

export default UserDetail;

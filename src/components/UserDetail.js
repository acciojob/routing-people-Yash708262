import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setItem(data);
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>User not found</div>;

  return (
    <div>
      <p>Name: {item.name}</p>
      <p>Username: {item.username}</p>
      <p>Email: {item.email}</p>
      <p>Phone: {item.phone}</p>
      <p>Website: {item.website}</p>
    </div>
  );
};

export default UserDetail;

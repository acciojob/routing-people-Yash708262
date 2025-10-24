import React, {useState, useEffect} from 'react'
import "regenerator-runtime/runtime";
import { Link } from "react-router-dom";



const UserList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchedData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            console.log(json)
            setData(json)
        }
        fetchedData()
    }, [])
  return (
    <div>
        <h1>User List</h1>
        <ul>
            {data.map((i) => (
                 <li key={i.id}>
                   <Link to={`/users/${i.id}`}>{i.name}</Link>
                 </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList
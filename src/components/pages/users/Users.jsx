import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    // const users = useLoaderData();
    const [users, setUsers ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>users: {users?.length}</h1>
        </div>
    );
};

export default Users;
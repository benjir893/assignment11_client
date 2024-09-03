import React, { useContext, useEffect, useState } from 'react';
import profile from '../../assets/profile_thumbnail01.jpeg'
import { useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';
import { Authcontext } from '../../services/AuthProvider';
import SubnavDisplay from './SubnavDisplay';
const Subnav = () => {
    const users = useLoaderData();
    const{user} = useContext(Authcontext);
    const{email} = user || {};
    
    const [loggedusers, setloggedusers] = useState(users)
    const currentUser = loggedusers?.find(user => user?.email === users?.email)

    // const loggerUser =Array.isArray(users)&& users?.find(user => user?.email === Email)
    return (
        <div>
            <div className="flex items-center">
                {/* <h1>benjir</h1>
                <img className='w-16 h-16 p-2 rounded-full' src={profile} alt="" /> */}
                <p>{email}</p>
                <p>{name}</p>
                {/* <p>{currentUser?.length }</p> */}
                {/* {
                  Array.isArray(currentUser)&&currentUser?.map(user =><SubnavDisplay key={user.email} user={user} loggedusers={loggedusers} setloggedusers={setloggedusers}></SubnavDisplay>)
                } */}
            </div>
        </div>
    );
};

export default Subnav;
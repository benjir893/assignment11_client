import React from 'react';
import profile from '../../assets/profile_thumbnail01.jpeg'
const Subnav = () => {
    return (
        <div>
            <div className="flex items-center">
                <h1>benjir</h1>
                <img className='w-16 h-16 p-2 rounded-full' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Subnav;
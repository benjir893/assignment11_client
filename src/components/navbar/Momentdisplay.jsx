import moment from 'moment';
import React from 'react';

const Momentdisplay = () => {
    let now = moment().format('MMMM DD, YYYY');
    return (
        <div>
            <p className='text-blue-800'>{now}</p>
        </div>
    );
};

export default Momentdisplay;
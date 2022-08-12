import React from 'react';
import error from '../../assets/images/error.gif'

const Error = () => {
    return (
        <div className='flex justify-center items-center mt-10 mx-auto'>
			<img src={error} alt="" className='w-1/3' />
		</div>
    );
};

export default Error;
import React from 'react';
import errorImage from '/error-page.jpg';

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;
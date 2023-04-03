import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className='p-10 flex flex-col items-center gap-5'>
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000" alt="" className='h-96 mx-auto rounded-lg' />
            <h4 className='text-xl font-bold text-red-300 border-2 px-5 py-1'>Error {error.status}</h4>
            <p>{error.message}</p>
            <h2><button className='btn btn-error' onClick={() => navigate(-1)}>Go Back</button></h2>
        </div>
    );
};

export default ErrorPage;
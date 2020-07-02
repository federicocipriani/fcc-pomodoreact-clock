import React from 'react';

const ResetBtn = ({ reset }) => {
    return (
        <button id='reset' onClick={reset}>
            <i className='fa fa-times'></i>
        </button>
    );
};

export default ResetBtn;

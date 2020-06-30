import React from 'react';

const ResetBtn = ({ reset }) => {
    return (
        <button id='reset' onClick={reset}>
            <i className='fa fa-times' style={{ color: 'red' }}>
                {' '}
                Reset
            </i>
        </button>
    );
};

export default ResetBtn;

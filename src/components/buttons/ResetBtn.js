import React from 'react';

const ResetBtn = () => {
    return (
        <button id='reset'>
            <i className='fa fa-times' style={{ color: 'red' }}>
                {' '}
                Reset
            </i>
        </button>
    );
};

export default ResetBtn;

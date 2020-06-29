import React from 'react';

const Break = ({ breakLength, changeNumbers }) => {
    return (
        <div id='settings-break'>
            <h1 id='break-label'>Break Length</h1>
            <button id='break-decrement' onClick={changeNumbers}>
                <i className='fa fa-minus'></i>
            </button>
            <div id='break-length'>{breakLength}</div>
            <button id='break-increment' onClick={changeNumbers}>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    );
};

export default Break;

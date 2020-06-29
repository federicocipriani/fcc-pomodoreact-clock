import React from 'react';

const Session = ({ sessionLength, changeNumbers }) => {
    return (
        <div id='settings-session'>
            <h1 id='session-label'>Session Length</h1>
            <button id='session-decrement' onClick={changeNumbers}>
                <i className='fa fa-minus'></i>
            </button>
            <div id='session-length'>{sessionLength}</div>
            <button id='session-increment' onClick={changeNumbers}>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    );
};

export default Session;

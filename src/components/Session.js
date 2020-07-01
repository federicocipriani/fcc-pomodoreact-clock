import React from 'react';

const Session = ({ sessionLength, changeNumbers }) => {
    return (
        <div id='settings-session'>
            <h1 id='session-label'>Session Length</h1>
            <button id='session-decrement' value='-' onClick={changeNumbers}>
                <i className='fa fa-minus' />
            </button>
            <div id='session-length'>{sessionLength}</div>
            <button id='session-increment' value='+' onClick={changeNumbers}>
                <i className='fa fa-plus' />
            </button>
        </div>
    );
};

export default Session;

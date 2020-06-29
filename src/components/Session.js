import React from 'react';

const Session = () => {
    return (
        <div id='settings-session'>
            <h1 id='session-label'>Session Length</h1>
            <button id='session-decrement'>-</button>
            <div id='session-length'>25</div>
            <button id='session-increment'>+</button>
        </div>
    );
};

export default Session;

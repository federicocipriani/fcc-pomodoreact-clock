import React from 'react';

const Session = ({ sessionLength, changeNumbers }) => {
    return (
        <div id='settings-session'>
            <h1 id='session-label'>SESSION LENGTH</h1>
            <button id='session-decrement' value='-' onClick={changeNumbers}>
                <ion-icon id='minus' name='remove'></ion-icon>
            </button>
            <div id='session-length'>{sessionLength}</div>
            <button id='session-increment' value='+' onClick={changeNumbers}>
                <ion-icon id='plus' name='add'></ion-icon>
            </button>
        </div>
    );
};

export default Session;

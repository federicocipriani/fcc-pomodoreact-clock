import React from 'react';

const Break = ({ breakLength, changeNumbers }) => {
    return (
        <div id='settings-break'>
            <h1 id='break-label'>BREAK LENGTH</h1>
            <button id='break-decrement' value='-' onClick={changeNumbers}>
                <ion-icon id='minus' name='remove'></ion-icon>
            </button>
            <div id='break-length'>{breakLength}</div>
            <button id='break-increment' value='+' onClick={changeNumbers}>
                <ion-icon id='plus' name='add'></ion-icon>
            </button>
        </div>
    );
};

export default Break;

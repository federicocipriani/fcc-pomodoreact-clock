import React from 'react';

const Break = () => {
    return (
        <div id='settings-break'>
            <h1 id='break-label'>Break Length</h1>
            <button id='break-decrement'>-</button>
            <div id='break-length'>5</div>
            <button id='break-increment'>+</button>
        </div>
    );
};

export default Break;

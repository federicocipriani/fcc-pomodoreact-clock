import React from 'react';

const ResetBtn = ({ reset }) => {
    return (
        <button id='reset' onClick={reset}>
            <ion-icon name='refresh'></ion-icon>
        </button>
    );
};

export default ResetBtn;

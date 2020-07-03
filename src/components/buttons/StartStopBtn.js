import React from 'react';

const StartStopBtn = ({ startStopTimer, isRunning }) => {
    return (
        <button id='start_stop' onClick={startStopTimer}>
            {isRunning ? (
                <div>
                    <ion-icon id='pause' name='pause'></ion-icon>
                </div>
            ) : (
                <div>
                    <ion-icon id='play' name='play'></ion-icon>
                </div>
            )}
        </button>
    );
};

export default StartStopBtn;

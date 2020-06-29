import React from 'react';

const StartStopBtn = ({ startStopTimer, isRunning }) => {
    return (
        <button id='start_stop' onClick={startStopTimer}>
            {isRunning ? (
                <div>
                    <i className='fa fa-pause'></i> Pause
                </div>
            ) : (
                <div>
                    <i className='fa fa-play'></i> Play
                </div>
            )}
        </button>
    );
};

export default StartStopBtn;

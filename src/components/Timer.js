import React from 'react';

const Timer = ({ currentTimer, timeLeft }) => {
    return (
        <div id='timer'>
            <div id='timer-label'>{currentTimer}</div>
            <div id='time-left'>{timeLeft}</div>
        </div>
    );
};

export default Timer;

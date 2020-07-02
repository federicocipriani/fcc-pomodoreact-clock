import React from 'react';

const Timer = ({ currentTimer, timeLeft }) => {
    return (
        <div id='timer'>
            <h1 id='timer-label'>{currentTimer}</h1>
            <div id='time-left'>{timeLeft}</div>
        </div>
    );
};

export default Timer;

import React from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import StartStopBtn from './components/buttons/StartStopBtn';
import ResetBtn from './components/buttons/ResetBtn';
import BreakDecrementBtn from './components/buttons/BreakDecrementBtn';
import BreakIncrementBtn from './components/buttons/BreakIncrementBtn';
import SessionDecrementBtn from './components/buttons/SessionDecrementBtn';
import SessionIncrementBtn from './components/buttons/SessionIncrementBtn';

function App() {
    return (
        <div className='container'>
            <Break />
            {/* <BreakDecrementBtn /> */}
            {/* <BreakIncrementBtn /> */}
            <Session />
            {/* <SessionDecrementBtn /> */}
            {/* <SessionIncrementBtn /> */}
            <Timer />
            <StartStopBtn />
            <ResetBtn />
        </div>
    );
}

export default App;

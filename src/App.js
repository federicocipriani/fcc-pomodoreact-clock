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

class App extends React.Component {
    state = {
        breakLength: 5,
        sessionLength: 25,
        currentTimer: 'Session',
        timeLeft: '1:00',
        isRunning: false,
    };

    changeNumbers = (e) => {
        const action = e.target.parentElement.id;
        switch (action) {
            case 'break-decrement':
                this.state.breakLength > 0 &&
                    this.setState({ breakLength: this.state.breakLength - 1 });
                break;
            case 'break-increment':
                this.setState({ breakLength: this.state.breakLength + 1 });
                break;
            case 'session-decrement':
                this.state.sessionLength > 0 &&
                    this.setState({
                        sessionLength: this.state.sessionLength - 1,
                    });
                break;
            case 'session-increment':
                this.state.sessionLength < 60 &&
                    this.setState({
                        sessionLength: this.state.sessionLength + 1,
                    });
                break;
            default:
                break;
        }
    };

    startStopTimer = () => {
        if (!this.state.isRunning) {
            this.setState({ isRunning: true });
            this.timer = setInterval(() => {
                let timeLeft = this.state.timeLeft;
                let minutes = +timeLeft.match(/\d+/g)[0];
                let seconds = +timeLeft.match(/\d+/g)[1];
                if (minutes === 0 && seconds === 0) {
                    clearInterval(this.timer);
                    this.setState({ timeLeft: "Time's over" });
                } else if (seconds !== 0) {
                    seconds -= 1;
                } else if (seconds === 0) {
                    minutes -= 1;
                    seconds = 59;
                }
                this.setState({
                    timeLeft:
                        minutes +
                        ':' +
                        (seconds < 10 ? `0${seconds}` : seconds),
                });
            }, 1000);
        } else {
            this.setState({ isRunning: false });
            clearInterval(this.timer);
        }
    };

    render() {
        return (
            <div className='container'>
                <Break
                    breakLength={this.state.breakLength}
                    changeNumbers={this.changeNumbers}
                />
                <Session
                    sessionLength={this.state.sessionLength}
                    changeNumbers={this.changeNumbers}
                />
                <Timer
                    currentTimer={this.state.currentTimer}
                    timeLeft={this.state.timeLeft}
                />
                <StartStopBtn
                    startStopTimer={this.startStopTimer}
                    isRunning={this.state.isRunning}
                />
                {/* <ResetBtn /> */}
            </div>
        );
    }
}

export default App;

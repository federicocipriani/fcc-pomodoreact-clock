import React from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import StartStopBtn from './components/buttons/StartStopBtn';
import ResetBtn from './components/buttons/ResetBtn';

class App extends React.Component {
    state = {
        breakLength: 5,
        sessionLength: 25,
        currentTimer: 'Session',
        timeLeft: '25:00',
        isRunning: false,
    };

    changeNumbers = (e) => {
        const action = e.currentTarget.value;
        const element = e.currentTarget.parentElement.id;
        let sessionLength = this.state.sessionLength;
        let breakLength = this.state.breakLength;
        switch (action) {
            case '-':
                if (element === 'settings-session') {
                    if (sessionLength > 10) {
                        this.setState({
                            sessionLength: sessionLength - 1,
                            timeLeft: `${sessionLength - 1}:00`,
                        });
                    } else if (sessionLength > 1) {
                        this.setState({
                            sessionLength: sessionLength - 1,
                            timeLeft: `0${sessionLength - 1}:00`,
                        });
                    }
                } else {
                    breakLength !== 1 &&
                        this.setState({ breakLength: breakLength - 1 });
                }
                break;
            case '+':
                if (element === 'settings-session') {
                    if (sessionLength < 60 && sessionLength >= 9) {
                        this.setState({
                            sessionLength: sessionLength + 1,
                            timeLeft: `${sessionLength + 1}:00`,
                        });
                    } else if (sessionLength < 9) {
                        this.setState({
                            sessionLength: sessionLength + 1,
                            timeLeft: `0${sessionLength + 1}:00`,
                        });
                    }
                } else {
                    breakLength !== 60 &&
                        this.setState({ breakLength: breakLength + 1 });
                }
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
                    this.timerComplete.play();
                    if (this.state.currentTimer === 'Session') {
                        minutes = this.state.breakLength;
                        seconds = '0';
                        this.setState({ currentTimer: 'Break' });
                    } else {
                        minutes = this.state.sessionLength;
                        seconds = '0';
                        this.setState({ currentTimer: 'Session' });
                    }
                } else if (seconds !== 0) {
                    seconds -= 1;
                } else if (seconds === 0) {
                    minutes -= 1;
                    seconds = 59;
                }

                this.setState({
                    timeLeft:
                        (minutes < 10 ? `0${minutes}` : minutes) +
                        ':' +
                        (seconds < 10 ? `0${seconds}` : seconds),
                });
            }, 1000);
        } else {
            this.setState({ isRunning: false });
            clearInterval(this.timer);
        }
    };

    resetState = () => {
        clearInterval(this.timer);
        this.timerComplete.pause();
        this.timerComplete.currentTime = 0;
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            currentTimer: 'Session',
            timeLeft: '25:00',
            isRunning: false,
        });
    };

    render() {
        return (
            <div className='container'>
                <Break
                    index={this.state.index}
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
                <div id='buttons'>
                    <StartStopBtn
                        startStopTimer={this.startStopTimer}
                        isRunning={this.state.isRunning}
                    />
                    <ResetBtn reset={this.resetState} />
                </div>
                <audio
                    id='beep'
                    preload='auto'
                    src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
                    ref={(audio) => {
                        this.timerComplete = audio;
                    }}
                />
            </div>
        );
    }
}

export default App;

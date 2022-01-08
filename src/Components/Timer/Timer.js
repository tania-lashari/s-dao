import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.scss";

// import {contractabi, contractAddress} from '../constants';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};
// 2678400/39600/1440/
const renderTime = (dimension, time) => {
  return (
    <div className="time-wrTimerer">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
  const deadLine = new Date(2022, 1, 14, 0, 0, 0, 0) / 1000; // use UNIX timestamp in seconds
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = deadLine;
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div className="Timer">
      <div className=" m-md-0 m-sm-1 m-2">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#ffde59"]]}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(daysDuration - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className=" m-md-0 m-sm-1 m-2">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#ffde59"]]}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className=" m-md-0 m-sm-1 m-2">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#ffde59"]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className=" m-md-0 m-sm-1 m-2">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#ffde59"]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

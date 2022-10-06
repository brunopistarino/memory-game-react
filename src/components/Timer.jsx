import { useState, useEffect } from "react";

const Timer = ({ restart, stop, update }) => {
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setSeconds(0);
  }, [restart]);

  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (stop && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [stop, seconds]);

  useEffect(() => {
    setTime(new Date(seconds * 1000).toISOString().substring(14, 19));
  }, [seconds]);

  useEffect(() => {
    update(time);
  }, [time, update]);

  return <h2>{time}</h2>;
};

export default Timer;

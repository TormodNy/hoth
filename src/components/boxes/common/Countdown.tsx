import { useEffect, useState } from "react";

interface CountdownProps {
  date: string;
  time: string;
  occasion?: string;
}

function dateNowInGMT() {
  return Date.now() - new Date().getTimezoneOffset() * 60 * 1000;
}

export function Countdown({ date, time, occasion }: CountdownProps) {
  const [timeHours, timeMinutes] = time.split(":");
  const dateTime =
    Date.parse(date) +
    (Number.parseInt(timeHours) * 3600 + Number.parseInt(timeMinutes) * 60) *
      1000;

  const [timeLeft, setTimeLeft] = useState<number>(dateTime - dateNowInGMT());

  const timeLeftInSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(timeLeftInSeconds / 86400);
  const hours = Math.floor((timeLeftInSeconds % 86400) / 3600);
  const minutes = Math.floor((timeLeftInSeconds % 3600) / 60);
  const seconds = timeLeftInSeconds % 60;

  const timerDisplay = [
    ...(days !== 0 ? [`${days} days`] : []),
    ...(hours !== 0 ? [`${hours} hours`] : []),
    ...(minutes !== 0 ? [`${minutes} minutes`] : []),
    `${seconds} seconds`,
  ];

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setTimeLeft(dateTime - dateNowInGMT());
    }, 1000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <>
      {timerDisplay[0] && <h1 className="text-7xl">{timerDisplay[0]}</h1>}
      {timerDisplay[1] && <h2 className="text-5xl">{timerDisplay[1]}</h2>}
      {timerDisplay[2] && <h3 className="text-3xl">{timerDisplay[2]}</h3>}
      {timerDisplay[3] && <h4 className="text-xl">{timerDisplay[3]}</h4>}
      <br />
      <h3 className="text-3xl">
        until {occasion || `${new Date(date).toLocaleDateString()} ${time}`}
      </h3>
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import HeadTimer from "./HeadTimer.jsx";
import RunTimer from "./RunTimer.jsx";
import ListTimer from "./ListTimer.jsx";
const TimerApp = () => {
  const [time, setTime] = useState(0);

  const [listTimer, setListTimer] = useState(() => {
    const savedTimer = localStorage.getItem("Timer");
    return savedTimer ? JSON.parse(savedTimer) : [];
  });

  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (cs) => {
    const minutes = Math.floor(cs / 6000);
    const seconds = Math.floor((cs % 6000) / 100);
    const centiseconds = cs % 100;

    const stringMinute = String(minutes).padStart(2, "0");
    const stringSecond = String(seconds).padStart(2, "0");
    const stringCS = String(centiseconds).padStart(2, "0");
    return `${stringMinute}:${stringSecond}:${stringCS}`;
  };

  const runTimer = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
  };

  const pauseTimer = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const resetTimer = () => {
    if (time <= 0) return;
    pauseTimer();
    const hour = new Intl.DateTimeFormat("pt-PT", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    const date = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date());
    setListTimer((prev) => [
      ...prev,
      { id: Date.now(), time: time, hour: hour, date: date },
    ]);
    setTime(0);
    setRunning(false);
  };

  const removeItem = (idToRemove) => {
    setListTimer((prev) => prev.filter((item) => item.id !== idToRemove));
  };

  const reloadTimer = (idItem, timeItem) => {
    resetTimer();
    removeItem(idItem);
    setTime(timeItem);
    setRunning(false);
  };

  useEffect(() => {
    localStorage.setItem("Timer", JSON.stringify(listTimer));
  }, [listTimer]);

  return (
    <div className="w-full max-w-md space-y-8 mt-12">
      <HeadTimer />
      <RunTimer
        formatTime={formatTime}
        time={time}
        running={running}
        pauseTimer={pauseTimer}
        runTimer={runTimer}
        resetTimer={resetTimer}
      />

      <ListTimer
        listTimer={listTimer}
        formatTime={formatTime}
        reloadTimer={reloadTimer}
        removeItem={removeItem}
      />
    </div>
  );
};

export default TimerApp;

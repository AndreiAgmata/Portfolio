import React, { useState, useEffect } from "react";
import "./countdown.css";

function Countdown() {
  const [display, setDisplay] = useState("5");
  const [totalTime] = useState(5);
  const [secsFromInitialStart, setSecsFromInitialStart] = useState(0);
  const [clock, setClock] = useState();
  const [clockPaused, setClockPaused] = useState(false);

  const [circle, setCircle] = useState("circle");

  function end() {
    setCircle("circleEnd");
  }

  const startClockFn = () => {
    const start = new Date();
    setCircle("circleGo");
    let secsFromLastPaused = 0;
    if (clockPaused) {
      secsFromLastPaused += secsFromInitialStart;
      setClockPaused(false);
    }
    setClock(
      setInterval(() => {
        let current;
        current = Number(((new Date() - start) / 1000).toFixed());
        current += secsFromLastPaused;
        setSecsFromInitialStart(current);
        current = totalTime - current;
        let secs = (current % 60).toString().padStart(2, "");
        setDisplay(`${secs}`);
      }, 1000)
    );
  };
  useEffect(() => {
    if (Number(secsFromInitialStart) === Number(totalTime)) {
      end();
      stopClockFn();
    }
  }, [secsFromInitialStart]);
  const stopClockFn = () => {
    clearInterval(clock);
  };
  const pauseClockFn = () => {
    setDisplay("5");
    setCircle("circle");
    clearInterval(clock);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className={circle}>
        <h1 className="number">{display}</h1>
      </div>
      <div className="countdownButtons">
        <button onClick={startClockFn} className="btn btn-success btn-lg">
          Start
        </button>
        <button onClick={pauseClockFn} className="btn btn-warning btn-lg">
          Reset
        </button>
      </div>
    </div>
  );
}
export default Countdown;

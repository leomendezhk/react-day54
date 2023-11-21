import { useState, useEffect } from "react";

export default function Clock(props) {
  //store date
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    console.log("The component lives!");
    let timerId;
    timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []); // [] to run once

  return (
    <div>
      <h1>What's the time?</h1>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  );
}

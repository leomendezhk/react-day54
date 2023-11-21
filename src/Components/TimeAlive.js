import { useState, useEffect, useRef } from "react";

export default function TimeAlive() {
  const [elapsed, setElapsed] = useState(0);
  let startTime = useRef(Date.now()); //ref keep val

  const tick = () => {
    setElapsed(Date.now() - startTime.current);
  };

  useEffect(() => {
    let timer;
    // console.log("setting up");
    timer = setInterval(tick, 1);

    //clear
    return () => {
      // console.log("cleaning  up");
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>Alive for: {(elapsed / 1000).toFixed(3)}s</p>
    </div>
  );
}

import Counter from "../Components/Counter";
import { useState } from "react";

export default function CounterBoard() {
  const [counters, setCounters] = useState([
    { name: "Leo", count: 0 },
    { name: "Jon", count: 2 },
  ]);

  const sortedCounters = counters.sort((a, b) => b.count - a.count);

  const [showAliveItems, setShowAliveItems] = useState(false);

  const incrementCount = (index) => {
    const array = [...counters];
    const targetCouter = array[index];
    targetCouter.count += 1;
    array[index] = targetCouter;
    setCounters(array);
  };

  const decrementCount = (index) => {
    const array = [...counters];
    const targetCouter = array[index];
    targetCouter.count -= 1;
    array[index] = targetCouter;
    setCounters(array);
  };

  //set new counters
  const [newCounterName, setNewCounterName] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            const newCounter = { name: newCounterName, count: 0 };
            const array = counters; //get the counters
            const newArray = array.concat(newCounter); //concat new counter
            setCounters(newArray); //call again setCounters
          }}
        >
          New Counter
        </button>
      </div>

      {sortedCounters.map((el, i) => {
        return (
          <Counter
            key={i}
            index={i}
            name={el.name}
            count={el.count}
            plus={incrementCount}
            minus={decrementCount}
          />
        );
      })}
    </div>
  );
}

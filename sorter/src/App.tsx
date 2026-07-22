import { useState } from "react";
import { QuickSort } from "./algorithims/quicksort";

const App = () => {
  const [array, setArray] = useState<number[]>([]);

  const [lenght, setLenght] = useState<number>(1);
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(100);
  const [duration, setDuration] = useState<number>();

  function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  function GenerateArray(): void {
    setArray([]);
    if (lenght < 1) {
      return;
    }

    for (let i = 0; i < lenght; i++) {
      setArray((prev) => [...prev, getRandomInt(from, to + 1)]);
    }
  }

  return (
    <main className="bg-[#1F3B4D] flex justify-center items-start text-white h-screen">
      <div className=" p-5 flex flex-col gap-5 w-fit justify-center">
        <div className="flex gap-2 items-end">
          <div className="flex flex-col gap-1">
            <h2>Lenght of the array</h2>
            <input
              min={1}
              value={lenght}
              onChange={(e) => {
                setLenght(parseInt(e.target.value));
              }}
              type="number"
              className="border-2 border-white rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2>From</h2>
            <input
              value={from}
              onChange={(e) => {
                setFrom(parseInt(e.target.value));
              }}
              type="number"
              className="border-2 border-white rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2>To</h2>
            <input
              value={to}
              onChange={(e) => {
                setTo(parseInt(e.target.value));
              }}
              type="number"
              className="border-2 border-white rounded-lg p-1"
            />
          </div>
          <button
            className=" bg-[#11202A] py-2 px-4 rounded-2xl hover:scale-105 transition-all duration-200"
            onClick={GenerateArray}
          >
            Generate
          </button>
        </div>
        <div className="flex flex-wrap gap-2 border-2 bg-[#11202A] border-black rounded-2xl w-fit p-2 overflow-auto max-w-[45em] max-h-[10em]">
          {array.map((num) => (
            <div className="text-lg">{num}</div>
          ))}
        </div>
        {duration !== undefined && <p>Sorted in {duration.toFixed(3)} ms</p>}

        <button
          onClick={() => {
            const start = performance.now();
            const sorted = QuickSort(array);
            const end = performance.now();
            setDuration(end - start);
            setArray(sorted);
          }}
          className="border-2 border-black rounded-2xl p-2 text-xl hover:bg-gray-300 transition-all duration-150 hover:scale-105"
        >
          Quick Sort
        </button>
      </div>
    </main>
  );
};

export default App;

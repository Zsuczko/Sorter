import { useState } from "react";
import { QuickSort } from "./algorithims/quicksort";

const App = () => {
  const [array, setArray] = useState<number[]>([
    5, 4, 9, 8, 1, 6, 10, 2, 3, 7, 45, 67, 69, 21, 10,
  ]);
  return (
    <div className=" p-5 flex flex-col gap-5 w-fit justify-center">
      <button
        onClick={() => {
          setArray(QuickSort(array));
        }}
        className="border-2 border-black rounded-2xl p-2 text-xl hover:bg-gray-300 transition-all duration-150 hover:scale-105"
      >
        Quick Sort
      </button>

      <div className="flex gap-2 border-2 border-black rounded-2xl w-fit p-2">
        {array.map((num) => (
          <div className="text-lg">{num}</div>
        ))}
      </div>
    </div>
  );
};

export default App;

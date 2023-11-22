// import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { firstNumberIncrement, secondNumberIncrement, firstNumberDecrement, secondNumberDecrement, resetAllNumber } from '../features/counter/counterSlice'

const CounterPage = () => {
  // const [counter, setCounter] = useState({
  //   firstNumber: 0,
  //   secondNumber: 0,
  // });
  const { firstNumber, secondNumber } = useSelector((state) => state.counter)
  const dispath = useDispatch()

  const counterFirstNumberIncrement = () => {
    // setCounter({
    //   ...counter,
    //   firstNumber: counter.firstNumber + 1,
    // });
    dispath(firstNumberIncrement())
  };

  const counterSecondNumberIncrement = () => {
    // setCounter({
    //   ...counter,
    //   secondNumber: counter.secondNumber + 1,
    // });
    dispath(secondNumberIncrement())
  };

  const counterFirstNumberDecrement = () => {
    // setCounter({
    //   ...counter,
    //   firstNumber: counter.firstNumber - 1,
    // });
    dispath(firstNumberDecrement())
  };

  const counterSecondNumberDecrement = () => {
    // setCounter({
    //   ...counter,
    //   secondNumber: counter.secondNumber - 1,
    // });
    dispath(secondNumberDecrement())
  };

  const counterReset = () => {
    // setCounter({
    //   firstNumber: 0,
    //   secondNumber: 0,
    // });
    dispath(resetAllNumber())
  };

  return (
    <section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
      <p className="text-2xl font-bold">Counter Page</p>

      <p className="text-xl">
        Nilai <i>firstNumber</i> sekarang adalah{" "}
        <span className="font-semibold">{firstNumber}</span>
      </p>

      <p className="text-xl">
        Nilai <i>secondNumber</i> sekarang adalah{" "}
        <span className="font-semibold">{secondNumber}</span>
      </p>

      <section className="flex flex-row gap-4">
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterFirstNumberIncrement}
        >
          + (First)
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterSecondNumberIncrement}
        >
          + (Second)
        </button>

        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterReset}
        >
          RESET
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterFirstNumberDecrement}
        >
          - (First)
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterSecondNumberDecrement}
        >
          - (Second)
        </button>
      </section>
    </section>
  );
};

export default CounterPage;

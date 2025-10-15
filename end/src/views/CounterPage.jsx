import { useSelector, useDispatch } from 'react-redux'
import { incrementFirstNumber, incrementSecondNumber, decrementFirstNumber, decrementSecondNumber, reset } from '../features/counter/counterSlice'

const CounterPage = () => {
    const { firstNumber, secondNumber } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const counterFirstNumberIncrement = () => {
        dispatch(incrementFirstNumber())
    };

    const counterSecondNumberIncrement = () => {
        dispatch(incrementSecondNumber())
    };

    const counterFirstNumberDecrement = () => {
        dispatch(decrementFirstNumber())
    };

    const counterSecondNumberDecrement = () => {
        dispatch(decrementSecondNumber())
    };

    const counterReset = () => {
        dispatch(reset())
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

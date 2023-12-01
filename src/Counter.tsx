import {useCounterStore} from "./store/store.ts";

export const Counter = () => {
	const {count, increment, decrement, reset} = useCounterStore()
	return (
		<div>
			<h2>{count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};
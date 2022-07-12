import {
	EventHandler,
	MouseEventHandler,
	ReactEventHandler,
	useState,
} from "react";

type CustomButtonProps = {
	text: string;
	clickHandler: any;
};

export function CustomButton({ text, clickHandler }: CustomButtonProps) {
	return (
		<button
			onClick={clickHandler}
			className="py-3 px-2 border border-blue-500 bg-slate-300 text-black"
		>
			{text}
		</button>
	);
}

export function Counter() {
	const [count, setCount] = useState(0);

	const reset = (event: any) => {
		setCount(0);
	};

	const increment = (event: any) => {
		setCount(count + 1);
	};

	return (
		<div className="w-[200px] bg-orange-800 text-cyan-400">
			<p>Count:{count}</p>
			<CustomButton clickHandler={reset} text="Reset" />
			<CustomButton clickHandler={increment} text="Increment" />
		</div>
	);
}

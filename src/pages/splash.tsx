// NOTES:
// a component function must return a single root element
// multi-line components need to be wrapped in parenthesis
// use the property 'className' instead of 'class' for CSS classes on an element
// props are passed to component functions as a single object; destructure them to use them in the component
// to interpolate JavaScript values into our JSX/TSX, use curly brackets
// if the interpolated value is an array, React will automatically take care of pulling each element out one by one

// Reactive state is state (bindings/variables) that is managed by React and auto-triggers rerenders

// Hooks are utility functions provided by React or plugins/libraries

import { useState } from "react";
import { Counter } from "../components/counter";
import { PictureCard } from "../components/pictureCard";

const blogPosts = [
	{
		title: "Top Ten Cat Pix",
		description: "Why I think these are the best",
		body: "sdofhsdkfjhsdkljfhsdkffgskddljgfsdkjfgsdkjfg",
	},
	{
		title: "Top Ten Cat Pix",
		description: "Why I think these are the best",
		body: "sdofhsdkfjhsdkljfhsdkffgskddljgfsdkjfgsdkjfg",
	},
	{
		title: "Top Ten Cat Pix",
		description: "Why I think these are the best",
		body: "sdofhsdkfjhsdkljfhsdkffgskddljgfsdkjfgsdkjfg",
	},
];

const pictures = [
	"https://www.placecage.com/c/201/300",
	"https://www.placecage.com/c/202/300",
	"https://www.placecage.com/c/203/300",
	"https://www.placecage.com/c/204/300",
	"https://www.placecage.com/c/205/300",
	"https://www.placecage.com/c/206/300",
];

export function SplashPage() {
	const [someBinding, setSomeBinding] = useState(false);
	const [greenLlamas, setGreenLlamas] = useState(false);

	return (
		<>
			<ExamplePage
				someBinding={someBinding}
				greenLlamas={greenLlamas}
			></ExamplePage>
			<button
				className="w-[40px] h-[40px]"
				onClick={() => {
					setSomeBinding((old) => {
						return !old;
					});
				}}
			>
				Click Me!
			</button>
			<b />
			<b />
			<b />
			<h1>React Intro</h1>
			<h2>Gallery</h2>
			<div id="picture-grid" className="mb-32 grid grid-cols-3 gap-1">
				{pictures.map((sourceString) => {
					return <PictureCard source={sourceString} />;
				})}
			</div>
			<div className="flex items-center justify-center m-24">
				<div>
					<h2>Counter</h2>
					<Counter />
				</div>
			</div>
		</>
	);
}

function conditionalComponent(someBinding: any, greenLlamas: any) {
	if (someBinding) {
		return <p>Not a llama</p>;
	} else if (greenLlamas) {
		return <p>Llama</p>;
	} else {
		return <p>Weee!</p>;
	}
}

type ExamplePageProps = {
	someBinding: any;
	greenLlamas: any;
};

function ExamplePage({ someBinding, greenLlamas }: ExamplePageProps) {
	return (
		<>
			<div id="layout">
				{conditionalComponent(someBinding, greenLlamas)}
			</div>
		</>
	);
}

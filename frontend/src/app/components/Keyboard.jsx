"use client";
import React, { useState } from "react";

// const [input, setLetter] = useState("");

function HandleKeyStroke() {
	alert("Yo");
}

function Keyboard() {
	return (
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 text-turquoise">
			<div className="my-1 flex w-full justify-center gap-1">
				{["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
					<kbd key={key} className="kbd">
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
					<kbd key={key} className="kbd">
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["z", "x", "c", "v", "b", "n", "m", "/"].map((key) => (
					<kbd key={key} className="kbd">
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				<button
					className="kbd btn btn-wide text-turquoise"
					onClick={HandleKeyStroke}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Keyboard;

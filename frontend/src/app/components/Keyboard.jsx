"use client";
import React, { useState } from "react";

function Keyboard() {
	const [selectedKey, setSelectedKey] = useState("");

	function handleKeyClick(key) {
		setSelectedKey(key);
	}

	function handleSubmit() {
		const fetchSelectedKey = async () => {
			try {
				const response = await fetch(
					"http://127.0.0.1:5000/post-check-letter",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ selectedKey }),
					}
				);
				const data = await response.json();
				console.log("Response from server:", data);
			} catch (error) {
				console.error("Error fetching the letter submitted:", error);
			}
		};
	}
	return (
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 text-turquoise">
			<div className="rounded border-1 bg-neutral-300/30">
				{selectedKey && <div className="mt-4 text-center">{selectedKey}</div>}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
					<kbd key={key} className="kbd" onClick={() => handleKeyClick(key)}>
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["A", "S", "D", "F", "G", "H", "J", "J", "K"].map((key) => (
					<kbd key={key} className="kbd" onClick={() => handleKeyClick(key)}>
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["Z", "X", "C", "V", "B", "N", "M", ""].map((key) => (
					<kbd key={key} className="kbd" onClick={() => handleKeyClick(key)}>
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				<button
					className="kbd btn btn-wide text-turquoise"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Keyboard;

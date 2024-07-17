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
			<div className="rounded border-2 bg-neutral-300/30">
				{selectedKey ? (
					<div className="m-2 text-center">{selectedKey}</div>
				) : (
					<div className="flex justify-center items-center m-2 text-center ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
							/>
						</svg>
					</div>
				)}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
					<kbd
						key={key}
						className="kbd mt-1"
						onClick={() => handleKeyClick(key)}
					>
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["A", "S", "D", "F", "G", "H", "J", "J", "K"].map((key) => (
					<kbd
						key={key}
						className="kbd mt-1"
						onClick={() => handleKeyClick(key)}
					>
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["Z", "X", "C", "V", "B", "N", "M", ":)"].map((key) => (
					<kbd
						key={key}
						className="kbd mt-1"
						onClick={() => handleKeyClick(key)}
					>
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				<button
					className="kbd mt-1 btn btn-wide text-turquoise"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Keyboard;

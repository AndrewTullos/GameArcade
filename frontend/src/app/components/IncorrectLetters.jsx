"use client";
import React, { useState } from "react";
import Image from "next/image";

const IncorrectLetters = () => {
	const [incorrectLetters, setIncorrectLetters] = useState([]);

	const fetchGuessedLetters = async () => {
		try {
			const response = await fetch("http://127.0.0.1:5000/get-char-count");
			const data = await response.json();
			setGuessedLetters(data.guessed_letters);
			setIncorrectLetters(data.incorrect_letters);
		} catch (error) {
			console.error("Error fetching the character count:", error);
		}
	};

	const handleKeyPress = async (key) => {
		try {
			const response = await fetch("http://127.0.0.1:5000/post-check-letter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ selectedKey: key }),
			});
			const data = await response.json();

			if (!data.correct) {
				setIncorrectLetters([...incorrectLetters, key]);
			}
		} catch (error) {
			console.error("Error checking letter:", error);
		}
	};

	const isIncorrect = (key) => incorrectLetters.includes(key);

	return (
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30">
			<h1 className="text-2xl m-5 font-bold leading-7 text-orange sm:truncate sm:text-3xl sm:tracking-tight">
				Incorrect Letters
			</h1>
			<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 text-neutral">
				<div className="my-1 flex w-full justify-center gap-1">
					{["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
						<kbd
							key={`QWERTYUIOP-${key}`}
							className={`mt-1 ${isIncorrect(key) ? "text-orange" : ""}`}
							onClick={() => handleKeyPress(key)}
						>
							{key}
						</kbd>
					))}
				</div>
				<div className="my-1 flex w-full justify-center gap-1">
					{["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
						<kbd
							key={`ASDFGHJKL-${key}`}
							className={`mt-1 ${isIncorrect(key) ? "text-orange" : ""}`}
							onClick={() => handleKeyPress(key)}
						>
							{key}
						</kbd>
					))}
				</div>
				<div className="my-1 flex w-full justify-center gap-1">
					{["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
						<kbd
							key={`ZXCVBNM-${key}`}
							className={`mt-1 ${isIncorrect(key) ? "text-orange" : ""}`}
							onClick={() => handleKeyPress(key)}
						>
							{key}
						</kbd>
					))}
				</div>
			</div>
		</div>
	);
};

export default IncorrectLetters;

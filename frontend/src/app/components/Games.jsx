import React from "react";

function Games() {
	{
		/* Game Selction */
	}
	return (
		<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ">
			<a
				href="./games/hangman"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={`mb-3 text-2xl font-semibold`}>
					Hangman{" "}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
					</span>
				</h2>
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					A game where one player guesses a hidden word's letters while AI draws
					a hanged man for each incorrect guess.{" "}
				</p>
			</a>

			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={`mb-3 text-2xl font-semibold`}>
					Coming Soon{" "}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
					</span>
				</h2>
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					More on the way!
				</p>
			</a>

			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={`mb-3 text-2xl font-semibold`}>
					Coming Soon{" "}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
					</span>
				</h2>
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					More on the way!
				</p>
			</a>

			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				// target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className={`mb-3 text-2xl font-semibold`}>
					Coming Soon{" "}
					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
					</span>
				</h2>
				<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
					More on the way!
				</p>
			</a>
		</div>
	);
}

export default Games;

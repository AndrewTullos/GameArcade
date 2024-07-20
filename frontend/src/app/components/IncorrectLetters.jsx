import Image from "next/image";

const IncorrectLetters = () => (
	<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30">
		<h1 className="text-2xl m-5 font-bold leading-7 text-orange sm:truncate sm:text-3xl sm:tracking-tight">
			Incorrect Letters
		</h1>
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 text-neutral">
			<div className="my-1 flex w-full justify-center gap-1">
				{["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
					<kbd key={key} className=" mt-1">
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["A", "S", "D", "F", "G", "H", "J", "J", "K"].map((key) => (
					<kbd key={key} className=" mt-1">
						{key}
					</kbd>
				))}
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				{["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
					<kbd key={key} className=" mt-1">
						{key}
					</kbd>
				))}
			</div>
		</div>
	</div>
);

export default IncorrectLetters;

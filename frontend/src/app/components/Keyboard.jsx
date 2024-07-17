import React from "react";

function Keyboard() {
	return (
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 text-turquoise">
			<div className="my-1 flex w-full justify-center gap-1">
				<kbd className="kbd">q</kbd>
				<kbd className="kbd">w</kbd>
				<kbd className="kbd">e</kbd>
				<kbd className="kbd">r</kbd>
				<kbd className="kbd">t</kbd>
				<kbd className="kbd">y</kbd>
				<kbd className="kbd">u</kbd>
				<kbd className="kbd">i</kbd>
				<kbd className="kbd">o</kbd>
				<kbd className="kbd">p</kbd>
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				<kbd className="kbd">a</kbd>
				<kbd className="kbd">s</kbd>
				<kbd className="kbd">d</kbd>
				<kbd className="kbd">f</kbd>
				<kbd className="kbd">g</kbd>
				<kbd className="kbd">h</kbd>
				<kbd className="kbd">j</kbd>
				<kbd className="kbd">k</kbd>
				<kbd className="kbd">l</kbd>
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				<kbd className="kbd">z</kbd>
				<kbd className="kbd">x</kbd>
				<kbd className="kbd">c</kbd>
				<kbd className="kbd">v</kbd>
				<kbd className="kbd">b</kbd>
				<kbd className="kbd">n</kbd>
				<kbd className="kbd">m</kbd>
				<kbd className="kbd">/</kbd>
			</div>
			<div className="my-1 flex w-full justify-center gap-1">
				<button className=" kbd btn btn-wide text-turquoise">Submit</button>
			</div>
		</div>
	);
}

export default Keyboard;

import React from "react";

function Background() {
	return (
		<div
			className="hero w-full flex flex-grow items-start justify-center relative"
			style={{
				backgroundImage: `url('/bg.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		></div>
	);
}

export default Background;

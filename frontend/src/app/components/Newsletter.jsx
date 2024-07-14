import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

import React from "react";

function Newsletter() {
	return (
		<footer className="relative isolate overflow-hidden bg-gradient-to-b from-turquoise/90 to-mint-to-t py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Subscribe to my newsletter.
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-300">
							Get updates on new games as I release them!
						</p>
						<div className="mt-6 flex max-w-md gap-x-4">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								placeholder="Enter your email"
								autoComplete="email"
								className="min-w-0 flex-auto rounded-md border-0 bg- px-3.5 py-2 text-white shadow-sm ring-2 ring-inset ring-orange/70 focus:ring-2 focus:ring-inset focus:ring-indigo-900 sm:text-sm sm:leading-6"
							/>
							<a
								type="submit"
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
								className="flex-none rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Subscribe
							</a>
						</div>
					</div>
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-2 ring-orange/70">
								<CalendarDaysIcon
									aria-hidden="true"
									className="h-6 w-6 text-white"
								/>
							</div>
							<dt className="mt-4 font-semibold text-white">Weekly articles</dt>
							<dd className="mt-2 leading-7 text-gray-400">
								Fun coding blog soon to come!
							</dd>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-2 ring-orange/70">
								<HandRaisedIcon
									aria-hidden="true"
									className="h-6 w-6 text-white"
								/>
							</div>
							<dt className="mt-4 font-semibold text-white">No spam</dt>
							<dd className="mt-2 leading-7 text-gray-400">
								No spam, emails, unsubscribe anytime.
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#f6530b] to-[#f6530b] opacity-30"
				/>
			</div>
		</footer>
	);
}

export default Newsletter;
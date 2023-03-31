import React, { useState } from "react";
import { styles } from "./constants/styles";
import { HiArrowsRightLeft } from "react-icons/hi2";
import DatePicker from "./DatePicker";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";
import { BsCalendarEventFill } from "react-icons/bs";
import Seats from "./Seats";

const Main = () => {
	const [showDate, setShowDate] = useState(false);
	const [roundtrip, setRoundtrip] = useState(false);
	const handleDate = () => {
		console.log(showDate);
		setShowDate(!showDate);
	};

	const pull_roundTrip = (data) => {
		setRoundtrip(data);
	};
	return (
		<section className="relative w-full h-screen mx-auto py-10">
			{/* Card */}
			<div
				className={`absolute inset-0 top-[100px] max-w-[70%] h-fit
                flex flex-col gap-7 items-center mx-auto bg-gray-100 border shadow-lg`}
			>
				<div className="w-fit px-10 mt-4 mb-3 ">
					<p className=" h-10 text-[27px] font-bold">Buy your ticket </p>
				</div>
				{/* FROM TO */}
				<div className="w-[80%] flex flex-row justify-between items-center">
					{/* FROM */}
					<button
						className=" text-white 
                     shadow-[0_4px_9px_-4px_#3b71ca] font-medium border-black xl:w-96"
					>
						<select
							className=" px-[70px] py-[7px] rounded-[5px]  bg-[#f0a630] 
                            hover:bg-[#fdae2f] focus:outline-none"
							data-te-select-init
							data-te-select-filter="true"
						>
							<option className="text-[25px] font-bold" disabled>
								FROM
							</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</button>

					<div>
						<HiArrowsRightLeft size={34} />
					</div>
					<button
						className=" text-white 
                     shadow-[0_4px_9px_-4px_#3b71ca] font-medium border-black xl:w-96
                     transition duration-150 ease-in-out "
					>
						<select
							className=" px-[70px] py-[7px] rounded-[5px]  bg-[#f0a630] 
                            hover:bg-[#fdae2f] focus:outline-none"
							data-te-select-init
							data-te-select-filter="true"
						>
							<option className="text-[25px] font-bold" disabled>
								FROM
							</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</button>
				</div>
				{/* ROW 2 */}
				<div className="flex flex-row gap-10 mt-3 mb-7">
					<button
						onClick={() => handleDate()}
						className={` ${
							showDate ? "bg-[#ecb32e]" : "calendar-btn "
						} min-w-[70px] min-h-[100px] bg-[#ecb32e] text-white flex flex-row justify-center items-center rounded`}
					>
						<BsCalendarEventFill size={40} color="white" />
					</button>
					<div className={`${showDate ? "relative" : "hidden"}`}>
						<DatePicker pullData={pull_roundTrip} />
					</div>

					{/* Round trip */}
					<div className="flex flex-col items-center justify-center">
						<div
							className={` ${
								showDate ? "hidden" : ""
							} flex flex-row gap-5 justify-between`}
						>
							<span className="font-bold text-md">Round trip</span>
							<label className="relative overflow inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									className="sr-only peer"
									disabled
								/>
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							</label>
						</div>
					</div>
					<div className="flex flex-col gap-5 ">
						<p className="">
							<input
								className="min-w-[200px] text-center h-7 shadow-sm rounded-lg border outline-none"
								type="number"
								placeholder="Adults"
								minLength="1"
								maxLength={2}
								pattern="[0-9]{10}"
							/>
						</p>
						<p>
							<input
								className="min-w-[200px] text-center h-7 shadow-sm rounded-lg border outline-none"
								type="number"
								placeholder="Children"
								minLength="1"
								maxLength={2}
								pattern="[0-9]{10}"
							/>{" "}
						</p>
						<p>
							<input
								className="min-w-[200px] text-center h-7 shadow-sm rounded-lg border outline-none"
								type="number"
								placeholder="Elderly"
								minLength="1"
								maxLength={2}
								pattern="[0-9]{10}"
							/>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;

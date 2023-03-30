import React, { useState } from "react";
import { styles } from "./constants/styles";
import { HiArrowsRightLeft } from "react-icons/hi2";
import DatePicker from "./DatePicker";

const Main = () => {
	const [showDate, setShowDate] = useState(true);

	const handleDate = () => {
		console.log(showDate);
		setShowDate(!showDate);
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
                     shadow-[0_4px_9px_-4px_#3b71ca] font-medium border-black xl:w-96
 "
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
				<div className="flex flex-row ">
					<button onClick={() => handleDate()} className="px-10 bg-black ">
						XX
					</button>
					<div className={`${showDate ? "relative" : "hidden"} `}>
						<DatePicker />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;

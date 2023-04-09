import React, { useState, useEffect } from "react";
import { styles } from "./constants/styles";
// Icons
import { BsCalendarEventFill } from "react-icons/bs";
// Date
import DatePicker from "./DatePicker";

import Navigation from "./Navigation";
// react select
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CityPicker from "./CityPicker";

const Main = () => {
	const [showDate, setShowDate] = useState(false);
	const [roundtrip, setRoundtrip] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const handleDate = () => {
		console.log(showDate);
		setShowDate(!showDate);
	};

	const pull_roundTrip = (data) => {
		setRoundtrip(data);
	};

	useEffect(() => {
		console.log("1");
	}, [register]);

	return (
		<>
			<Navigation />
			<section className=" w-full h-screen py-20  bg-main-pattern bg-cover bg-center bg-fixed">
				{/* Card */}
				<div
					className={` absolute inset-0 top-[100px] max-w-[70%] h-[30em]
                flex flex-col gap-7 mt-7 items-center mx-auto bg-gray-100 border-5 shadow-lg`}
				>
					<div className="w-fit px-10 mt-4 mb-7 ">
						<p className=" h-10 text-[34px] font-bold">Buy your ticket </p>
					</div>
					{/* FROM TO ROW */}
					<CityPicker />

					<form onSubmit={handleSubmit((data) => console.log(data))}>
						{/* ROW 2 */}
						<div className="flex flex-row  justify-between gap-12 mt-7 mb-7">
							<button
								onClick={() => handleDate()}
								className={` ${showDate ? "bg-[#ecb32e]" : "calendar-btn "} ${
									styles.inputTheme
								}  font-medium border-black xl:w-96
								max-w-[200px]
                                transition duration-150 ease-in-out px-[40px] py-[7px] outline-none min-w-[70px] min-h-[100px] bg-[#ecb32e]
								 text-white flex flex-row justify-center items-center rounded`}
							>
								<BsCalendarEventFill size={40} color="white" />
							</button>
							<div className={`${showDate ? "relative" : "hidden"}`}>
								<DatePicker pullData={pull_roundTrip} />
							</div>
							{/* Round trip */}
							<div className="flex flex-col items-center justify-center"></div>
							{/* PASSENGERS */}
							<div className="flex flex-col gap-5 ">
								<p className="">
									<input
										{...register("adults")}
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
										{...register("children", { required: true })}
										className="min-w-[200px] text-center h-7 shadow-sm rounded-lg border outline-none"
										type="number"
										placeholder="Children"
									/>
									{errors.children && <p>Children field is missing ?!.</p>}
								</p>
								<p>
									<input
										{...register("old", { pattern: /\d+/ })}
										className="min-w-[200px] text-center h-7 shadow-sm rounded-lg border outline-none"
										placeholder="Elderly"
										minLength="1"
										maxLength={2}
									/>
								</p>
							</div>
						</div>
						<button type="submit" className="w-full my-7 shadow-danger-500">
							<Link
								state={{ SeatsNum: "" }}
								to={"/seats"}
								className={`${styles.navBarElement} hover:bg-red-700  text-[22px] font-bold text-white predict-button flex justify-center items-center
                             rounded-lg  h-12 min-w-[240px]`}
							>
								Next step
							</Link>
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Main;

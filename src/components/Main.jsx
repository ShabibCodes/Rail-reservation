import React, { useState } from "react";
import { styles } from "./constants/styles";
import { cityOptions } from "./constants";
// Icons
import { HiArrowsRightLeft } from "react-icons/hi2";
import { BsCalendarEventFill } from "react-icons/bs";
// Date
import DatePicker from "./DatePicker";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";

import Navigation from "./Navigation";
// react select
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Main = () => {
	const animatedComponents = makeAnimated();
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
					<div className="w-[80%] flex flex-row justify-around items-center">
						{/* FROM */}

						<Select
							placeholder="FROM"
							className={`${styles.inputTheme}  font-medium border-black xl:w-96
                            transition duration-150 ease-in-out px-[40px] py-[7px] rounded-[5px] outline-none `}
							closeMenuOnSelect={true}
							components={animatedComponents}
							isMulti={false}
							options={cityOptions}
							isSearchable={true}
						/>

						<div>
							<HiArrowsRightLeft size={34} />
						</div>
						<Select
							placeholder="TO"
							className={`${styles.inputTheme}  font-medium border-black xl:w-96
                            transition duration-150 ease-in-out px-[40px] py-[7px] rounded-[5px] outline-none `}
							closeMenuOnSelect={true}
							components={animatedComponents}
							isMulti={false}
							options={cityOptions}
							isSearchable={true}
						/>
					</div>
					<form onSubmit={handleSubmit((data) => console.log(data))}>
						{/* ROW 2 */}
						<div className="flex flex-row  justify-between gap-12 mt-7 mb-7">
							<button
								onClick={() => handleDate()}
								className={` ${showDate ? "bg-[#ecb32e]" : "calendar-btn "} ${
									styles.inputTheme
								}  font-medium border-black xl:w-96
                                transition duration-150 ease-in-out px-[40px] py-[7px] outline-none min-w-[70px] min-h-[100px] bg-[#ecb32e] text-white flex flex-row justify-center items-center rounded`}
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

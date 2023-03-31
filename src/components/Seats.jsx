import React, { useState } from "react";
import { seats } from "./constants/seats";
import { MdEventSeat } from "react-icons/md";
import Navigation from "./Navigation";

const Seats = () => {
	const [passengers, setPassengers] = useState([]);
	const [seat, setSeat] = useState([]);
	const handleSeats = (event) => {
		const new_seat = event.target.value;
		setSeat([new_seat, ...seat]); // spreading & adding new seat
		console.log("XX", seat);
	};
	return (
		<>
			<Navigation />
			<section className=" w-full h-screen py-20  bg-main-pattern bg-cover bg-center bg-fixed">
				{/* Card */}
				<div
					className={`fixed inset-0 top-[135px] max-w-md md:max-w-4xl overflow-hidden h-[70%]
                flex flex-row justify-around gap-10  mx-auto bg-gray-100 border-[1.9px] shadow-lg`}
				>
					{/* Summary */}
					<div className="flex flex-col justify-evenly ml-[7%] items-center text-center">
						<div className="">
							Selected Seats: <br />
							<span>{seat.map((e) => e + ", ")}</span>
						</div>

						<div className="mt-[10%] ">
							<p className="bg-[#8ecae6] w-60 h-16 font-bold text-[20px] border bg-white rounded-t-full text-center pt-2">
								Adults:
							</p>
							<p className=" bg-[#8ecae6] w-60 h-16 border bg-white  text-center pt-2">
								Children:
							</p>
							<p className="bg-[#8ecae6] w-60 h-16 border bg-white rounded-b-full text-center pt-2 overflow-hidden">
								Elderly:
							</p>
						</div>

						<p className="">
							<button>submit</button>
						</p>
					</div>

					<div className="flex flex-col items-center my-auto h-fit">
						<p
							className="seats flex flex-row flex-wrap w-[25em] justify-center items-center
                     gap-5 border-5 rounded-lg shadow-md py-5 px-2 mx-8 bg-gray-200 "
						>
							{seats.map((seat, index) => (
								<button
									key={index}
									value={seat}
									onClick={handleSeats}
									type="radio"
									className="btnHover w-13 h-15 p-4 rounded-lg
                                 shadow bg-gradient-to-r from-yellow-500 to-amber-500"
								>
									<p>
										<MdEventSeat size={30} />
									</p>
									{seat}
								</button>
							))}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Seats;

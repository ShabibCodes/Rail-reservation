import React, { useState } from "react";
import { seats } from "./constants/seats";
import { MdEventSeat } from "react-icons/md";

const Seats = () => {
	const [passengers, setPassengers] = useState([]);
	const [seat, setSeat] = useState([]);
	const handleSeats = (event) => {
		const new_seat = event.target.value;
		setSeat([new_seat, ...seat]); // spreading & adding new seat
		console.log("XX", seat);
	};
	return (
		<section className="relative w-full h-screen mx-auto py-10">
			{/* Card */}
			<div
				className={`fixed inset-0 top-[135px] w-[75%] h-[70%]
                flex flex-row justify-around gap-10  mx-auto bg-gray-100 border-[1.9px] shadow-lg`}
			>
				{/* Summary */}
				<div className="flex flex-col justify-evenly ml-[7%] items-center text-center">
					<div className="">submit</div>

					<div className="mt-[10%] ">
						<p className="w-60 h-16 font-bold text-[20px] border bg-white rounded-t-full text-center pt-2">
							Adults:
						</p>
						<p className="w-60 h-16 border bg-white  text-center pt-2">
							Children:
						</p>
						<p className="w-60 h-16 border bg-white rounded-b-full text-center pt-2 overflow-hidden">
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
	);
};

export default Seats;

import React from "react";
import { styles } from "./constants/styles";

const Main = () => {
	return (
		<section className="relative w-full h-screen mx-auto py-10">
			{/* Card */}
			<div
				className={`absolute inset-0 top-[100px] max-w-[70%] h-[400px]
                flex flex-col items-center mx-auto bg-gray-100 border shadow-lg`}
			>
				<div className="w-fit px-10 bg-gray-300 mt-3 mb-7">
					<p className=" h-10 text-[24px] font-bold">Buy your ticket </p>
				</div>
				{/* FROM TO */}
				<div className="w-[80%] flex flex-row justify-between">
					{/* FROM */}
					<div class="flex justify-center ">
						<div class="mb-3 text-white text-[23px] border-black xl:w-96">
							<select
								className=" px-[60px] py-[7px] rounded-[3px]  bg-orange-400 hover:bg-[#fdae2f] focus:outline-none"
								data-te-select-init
								data-te-select-filter="true"
							>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
								<option value="4">Four</option>
								<option value="5">Five</option>
								<option value="6">Six</option>
								<option value="7">Seven</option>
								<option value="8">Eight</option>
								<option value="9">Nine</option>
								<option value="10">Ten</option>
							</select>
						</div>
					</div>

					<p>Arrows</p>
					<div class="flex justify-center ">
						<div class="mb-3 text-white text-[23px] xl:w-96">
							<select
								className="px-[60px] py-[7px] rounded-[3px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none"
								data-te-select-init
								data-te-select-filter="true"
							>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
								<option value="4">Four</option>
								<option value="5">Five</option>
								<option value="6">Six</option>
								<option value="7">Seven</option>
								<option value="8">Eight</option>
								<option value="9">Nine</option>
								<option value="10">Ten</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;

import React, { useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { motion } from "framer-motion";

import { HiArrowsRightLeft, HiArrowSmallRight } from "react-icons/hi2";
import { cityOptions } from "./constants";
import { styles } from "./constants/styles";

const CityPicker = () => {
	const animatedComponents = makeAnimated();
	const [roundtrip, setRoundtrip] = useState(false);

	return (
		<div className="w-[90%] flex flex-row gap-3 justify-around items-center">
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

			<div
				className="flex flex-col justify-start items-center cursor-pointer"
				onClick={() => setRoundtrip(!roundtrip)}
			>
				<span className="font-bold text-md">Round trip</span>
				<motion.p
					animate={{ rotate: roundtrip ? 180 : 0, scale: 1 }}
					whileHover={{ scale: 1.1, color: "orange" }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 60,
					}}
				>
					{roundtrip ? (
						<HiArrowsRightLeft size={34} />
					) : (
						<HiArrowSmallRight size={30} />
					)}
				</motion.p>
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
	);
};

export default CityPicker;

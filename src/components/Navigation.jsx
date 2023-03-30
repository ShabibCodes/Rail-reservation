import React, { useState } from "react";
import { navLinks } from "./constants";
import { styles } from "./constants/styles";
import { Link } from "react-router-dom";
const Navigation = () => {
	const [on, setOn] = useState("");

	const goUp = () => {
		setOn();
		window.scrollTo(0, 0); //go to the top of the page
	};

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 absolute top-0 z-100 bg-[#fca311]`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<div>
					<p className="text-[#f9fafb] text-[20px] font-bold cursor-pointer flex gradientText">
						&nbsp;Shabib Aldawsari
						<span className=" hidden md:block pl-2">|&nbsp;Developer</span>
					</p>
				</div>
				{/* Nav Content */}
				<ul className="flex list-none  gap-10  sm:flex ">
					{/* dynamic code  */}
					{navLinks.map((link, i) => (
						<li
							key={link.id}
							className={`hover:text-[#11ecfc] text-[#f9fafb] text-[22px] font-bold cursor-pointer`}
							onClick={() => {
								setOn(link.title);
								console.log(link.title);
							}}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;

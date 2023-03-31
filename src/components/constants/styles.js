/**
 * A simple way for concatenating long CSS styling
 */

const styles = {
	paddingX: "sm:px-10 px-6",
	paddingY: "sm:py-10 py-6",
	padding: "sm:px-16 px-6 sm:py-16 py-10",

	heroHeadText:
		"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
	heroSubText:
		"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

	sectionHeadText:
		"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
	sectionSubText:
		"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
	navBarElement:
		"bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-pink-500 hover:to-blue-200 border-white-10",
	inputTheme: "bg-[#f0a630] hover:bg-[#fdae2f] focus:outline-none",
};

export { styles };

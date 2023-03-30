import React, { useState } from "react";
import { addDays } from "date-fns";
// External library
import { DateRangePicker, DateRange } from "react-date-range";

const DatePicker = () => {
	const [roundtrip, setRoundtrip] = useState(false);
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 1),
			key: "selection",
		},
	]);

	const handleDate = (item) => {
		const start = item.selection.startDate;
		const end = item.selection.endDate;
		if (start !== end) {
			setRoundtrip(true);
		} else {
			setRoundtrip(false);
		}
		console.log(item.selection.startDate);

		setState([item.selection]);
	};
	return (
		<div className="">
			<DateRange
				showDateDisplay={true}
				className="shadow flex flex-col flex-wrap "
				color={"#dddddd"}
				onChange={(item) => handleDate(item)}
				showSelectionPreview={true}
				moveRangeOnFirstSelection={false}
				months={1}
				ranges={state}
				direction="vertical"
				retainEndDateOnFirstSelection={false}
				minDate={new Date()} // current date
			/>
			{roundtrip ? "sss" : "xxx"}
		</div>
	);
};

export default DatePicker;

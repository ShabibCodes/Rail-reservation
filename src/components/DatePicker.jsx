import React, { useState } from "react";
import { addDays } from "date-fns";
// External library
import { DateRangePicker, DateRange } from "react-date-range";

const DatePicker = (props) => {
	// send data to parent
	// const { pullData } = props;
	// pullData(roundtrip);

	// Hooks
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
		<div className="absolute">
			<DateRange
				preventSnapRefocus={true}
				color="#333333"
				showDateDisplay={true}
				className="shadow font-bold "
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

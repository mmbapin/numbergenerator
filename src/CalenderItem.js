import React from 'react';

const CalenderItem = (props) => {
	const { dateItem } = props;

	const checkPrimeNumber = (num) => {
		for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
			if (num % i === 0) return false;
		}
		return num > 1;
	};

	const getClassName = () => {
		if (checkPrimeNumber(dateItem) !== false) {
			return 'cl_calitem cl_calitem--prime';
		} else if (dateItem % 2 === 0) {
			return 'cl_calitem cl_calitem--even';
		} else if (dateItem % 2 !== 0) {
			return 'cl_calitem cl_calitem--odd';
		}
	};
	return (
		<div className={getClassName()}>
			<h1 className='cl__dateText'>{dateItem}</h1>
		</div>
	);
};

export default CalenderItem;

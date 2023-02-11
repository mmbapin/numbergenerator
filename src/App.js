import React, { useState, useEffect } from 'react';
import './App.css';
import CalenderItem from './CalenderItem';

function App() {
	const [dateNumber, setDateNumber] = useState([]);

	const getDateElement = () => {
		for (let i = 0; i < 32; i++) {
			setDateNumber((dateNumber) => [...dateNumber, i]);
		}
	};

	useEffect(() => {
		dateNumber?.length <= 0 && getDateElement();
	}, [dateNumber]);
	return (
		<div className='App'>
			<div className='cl_headingwrap'>
				<h1 className='cl_maintitle'>30 Days Of React</h1>
				<h3 className='cl_subtitle'>Number Generator</h3>
			</div>
			<div className='cl_calgrid'>
				{dateNumber?.map((item, index) => (
					<CalenderItem dateItem={item} />
				))}
			</div>
		</div>
	);
}

export default App;

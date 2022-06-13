// Imports
import React, { useMemo } from "react";
import styled from "styled-components";

// Component
const DemoList = ({ items = [], title }) => {

	// DEV
	console.log('DemoList RUNNING');

	// Sort list
	// Prevent sort again and again with useMemo, 
	// while title changes in App.js
	const sortedList = useMemo(() => {
		console.log('Items SORTED');
		return items.sort((a, b) => { return a - b; });
		// Will be re-evaluate again when items will changes
	},[items]);

	// Return
	return(
		<Wrapper>
			<h2>{ title }</h2>
			<ul>
				{
					sortedList.map((item, index) => {
						return <li key={ index }>{ item }</li>
					})
				}
			</ul>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		li{
			margin: 1rem 0;
			padding: 0.5rem;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
			border-radius: 15px;
		}
	}
`;

// Export
export default React.memo(DemoList);
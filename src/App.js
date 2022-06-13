// Imports
import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import Button from "./components/ui/Button";
import DemoList from "./components/demo/DemoList";

// Component
const App = () => {

	// DEV
	console.log('APP RUNNING');

	// List name
	const [listName, setListName] = useState('Cahouet');
	const changeNameHandler = useCallback(() => {
		setListName('Jambon');
	},[]);

	// List items in memo
	const listItems = useMemo(() => { return [1,4,78,43,999] },[]);

	// Return
	return(
		<Wrapper>
			<DemoList items={ listItems } title={ listName }/>
			<Button onClickHandler={ changeNameHandler }>
				Change name
			</Button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	margin: 3rem auto;
	width: 30rem;
	padding: 1rem;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
	text-align: center;
	h1{
		margin: 0;
		text-align: center;
	}
`;

// Export
export default App;
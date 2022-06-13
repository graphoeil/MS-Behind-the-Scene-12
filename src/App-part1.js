// Imports
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import DemoOutput from "./components/demo/DemoOutput";
import Button from "./components/ui/Button";

// Component
const App = () => {

	// DEV
	console.log('APP RUNNING');

	// Allow hide / show p
	const [allowToggle, setAllowToggle] = useState(false);
	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	// Hide / show p
	const [showParagraph, setShowParagraph] = useState(false);
	// useCallback store the function (may be in localStorage)
	// and when React re-evaluate App it'll take the stored version
	// then no re-writing and React.memo will work, only to use
	// with function that never change !!!
	const toggleParagraph = useCallback(() => {
		if (allowToggle){
			setShowParagraph((oldState) => {
				return !oldState;
			});
		}
		/* We need to declare allowToggle, because useCallback remembers
		the value of allowToggle therefore never changes,
		so the show paragraph button cannot work
		when we click on allow toggling, we must therefore
		track allowToggle changes in the useCallback */
	},[allowToggle]);

	// Return
	return(
		<Wrapper>
			<h1>Hello world!</h1>
			<DemoOutput show={ showParagraph }/>
			<Button onClickHandler={ allowToggleHandler }>
				Allow toggling
			</Button>
			<Button onClickHandler={ toggleParagraph }>
				Show paragraph
			</Button>
			<hr/>
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
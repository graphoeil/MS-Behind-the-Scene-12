// Imports
import React from "react";
import styled from "styled-components";

// Component
const Button = ({ type="button", className, disabled, onClickHandler, children }) => {

	// DEV
	console.log('Button RUNNING');

	// Return
	return(
		<Wrapper type={ type } className={ className } disabled={ disabled }
			onClick={ onClickHandler }>
			{ children }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.button`
	font: inherit;
	border: 1px solid #4f005f;
	background: #4f005f;
	color: white;
	padding: 0.75rem 3.5rem;
	cursor: pointer;
	font-size: 1.15rem;
	border-radius: 30px;
	&:hover, &:active{
		background: #741188;
		border-color: #741188;
	}
	&:focus{
		outline: none;
	}
	&:disabled, &:hover:disabled, 
	&:active:disabled, &:focus:disabled{
		background: #ccc;
		border-color: #ccc;
		color: #666666;
		cursor: not-allowed;
	}
`;

// Export
// We must define if the component needs to be re-evaluated
// here this button will never change, so memo ,-)
/* However, here the button will still be re-evaluated because
function (like array or object) are reference type, while 
boolean, string, number ... are primitive.
false === false => true
'hi' === 'hi' =>  true
[1,2,3] === [1,2,3] => false
function === function => false
and because props.onClickHandler !== previous.props.onClickHandler 
then re-evaluation ! For that React use useCallback hooks for prevent 
function rewriting and let React.memo works. */
export default React.memo(Button);
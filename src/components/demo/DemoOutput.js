// Imports
import React from "react";
import MyParagraph from "./MyParagraph";

// Component
const DemoOutput = ({ show }) => {

	// DEV
	console.log('DemoOutput RUNNING');

	// Return
	return(
		<MyParagraph>{ show ? 'This is new!' : '' }</MyParagraph>
	);

};

// Export
// React.memo === shouldComponentUpdate, prevent unnecessary re-evaluations
export default React.memo(DemoOutput);
// Imports
import React from "react";

// Component
const MyParagraph = ({ children }) => {

	// DEV
	console.log('MyParagraph RUNNING');

	// Return
	return(
		<p>{ children }</p>
	);

};

// Export
export default MyParagraph;
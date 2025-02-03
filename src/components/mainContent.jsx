import React from "react";
import FormProject from "./FormProject";

function MainContent(activeProject) {

	console.log('projects:', activeProject);

	if (activeProject.activeProject === 'ADD_Project') {
		return (
			<FormProject />	
		);
	}

	return (
		<div>
			<h1>Main Content</h1>
		</div>
	);
}

export default MainContent;
import NavbarClean from "../components/NavbarClean";
import FormProject from "../components/FormProject";
import { useApiData } from "../components/ApiState";
import { useState, useEffect } from "react";
import api from "../api";
import { all } from "axios";
import MainContent from "../components/mainContent";

const PATH_PROJECT = import.meta.env.VITE_API_PATH_PROJECTS;
const PATH_NOTES = import.meta.env.VITE_API_PATH_NOTES;
const PATH_USERS = import.meta.env.VITE_API_PATH_USERS;

function Checklist() {
	const projects = useApiData(PATH_PROJECT);
	const notes = useApiData(PATH_NOTES);
	const users = useApiData(PATH_USERS);

	const [activeProject, setActiveProject] = useState('ADD_Project');

	const projectLinks = projects?.map((project, index) => (
		<a 
			key={index}
			className="text-decoration-none text-reset side-botton"
			href="#"
			onClick={() => setActiveProject(project.name)}>
			{project.name}
		</a>
	)) || [];

	const allData = [
		...projectLinks,

	];

	projectLinks.push(
		<a 
			key="new"
			className="text-decoration-none text-reset side-botton"
			style={{ 
				borderStyle: 'solid', 
				borderColor: 'var(--bs-primary)', 
				borderRadius: '8px', 
				paddingLeft: '3px',
				paddingRight: '3px',
				background: 'var(--bs-primary-border-subtle)' 
			}}
			href="#"
			onClick={() => setActiveProject('ADD_Project')}>
			New Project
		</a>
	);


	return (
		<div>
			<NavbarClean />
			<div className="lh-lg pb-0" id="checklist">
				<div className="container-fluid lh-lg">
					<div className="row">
						<div className="col-12 col-md-auto text-start d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-column flex-grow-0 sidebar">
							{projectLinks}
						</div>
						<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
							<MainContent activeProject={activeProject} />
						</div>
					</div>
				</div>
			</div>
			<script src="assets/bootstrap/js/bootstrap.min.js"></script>
		</div>
	);
}

export default Checklist;
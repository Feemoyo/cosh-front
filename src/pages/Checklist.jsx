import NavbarClean from "../components/NavbarClean";
import FormProject from "../components/FormProject";
import { useApiData } from "../components/ApiState";
import { useState, useEffect } from "react";
import api from "../api";

const PATH_PROJECT = import.meta.env.VITE_API_PATH_PROJECTS;
const PATH_NOTES = import.meta.env.VITE_API_PATH_NOTES;
const PATH_USERS = import.meta.env.VITE_API_PATH_USERS;

function Checklist() {
	const projects = useApiData(PATH_PROJECT);
	const notes = useApiData(PATH_NOTES);
	const users = useApiData(PATH_USERS);

	const [activeProject, setActiveProject] = useState('');

	const projectLinks = projects?.map((project, index) => (
		<a 
			key={index}
			className="text-decoration-none text-reset side-botton"
			href="#"
			onClick={() => setActiveProject(project.name)}>
			{project.name}
		</a>
	));

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
							<div className="row">
								<div className="col"></div>
								<div className="col"></div>
							</div>
							<div className="row">
								<div className="col"></div>
								<div className="col"></div>
							</div>
							<div className="row">
								<div className="col">
									<FormProject />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script src="assets/bootstrap/js/bootstrap.min.js"></script>
		</div>
	);
}

export default Checklist;
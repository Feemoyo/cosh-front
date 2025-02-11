import React, { useState, useEffect } from "react";
import { useApiData } from "./ApiState";
import TaskList from "./Tasks/TaskList";
import AddTaskForm from "./Tasks/AddTaskForm";
import FormProject from "./FormProject";
import api from "../api";

const PATH_NOTES = import.meta.env.VITE_API_PATH_NOTES;

const defaultProject = {
	accountable: "",
	text: "",
};

function MainContent({ activeProject }) {
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [newProject, setNewProject] = useState({ ...defaultProject });
	const {data, postData, putData} = useApiData(PATH_NOTES);

	useEffect(() => {
		if (activeProject === 'ADD_Project') return;

		const filtered = data.filter((project) => project.project === activeProject);
		setFilteredProjects(filtered.map(project => ({ ...project, isEditing: false })));
	}, [activeProject, data]);

	if (activeProject === 'ADD_Project') {
		return <FormProject />;
	}

	const handleEdit = (id) => {
		setFilteredProjects(prevProjects =>
			prevProjects.map(project =>
				project.id === id ? { ...project, isEditing: !project.isEditing } : project
			)
		);
	};

const handleSave = async (id) => {
	console.log("Salvando alterações para o item com ID:", id);

	const itemToUpdate = filteredProjects.find(project => project.id === id);
	if (!itemToUpdate) return;

	const formData = new FormData();
	Object.keys(itemToUpdate).forEach(key => {
		if (key !== "isEditing") {
			formData.append(key, itemToUpdate[key]);
		}
	});

	putData(id, formData);
};

	const handleFieldChange = (id, key, value) => {
		setFilteredProjects(prevProjects =>
			prevProjects.map(project =>
				project.id === id ? { ...project, [key]: value } : project
			)
		);
	};

	const handleAddNewProject = () => {
		newProject['project'] = activeProject;
		console.log("handle", newProject)
		newProject['date'] = new Date().toISOString().slice(0, 10);

		const formData = new FormData();

		Object.keys(newProject).forEach(key => {
			formData.append(key, newProject[key]);
		});

		postData(formData);

		const projectToAdd = { ...newProject, isEditing: false };
		setFilteredProjects([...filteredProjects, projectToAdd]);
		setNewProject({ ...defaultProject });
	};

	const handleNewProjectChange = (key, value) => {
		setNewProject(prev => ({ ...prev, [key]: value }));
	};

	return (
		<div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 col-xxl-10">
			<TaskList
				projects={filteredProjects}
				onEdit={handleEdit}
				onSave={handleSave}
				onFieldChange={handleFieldChange}
			/>
			<AddTaskForm
				newProject={newProject}
				onAddProject={handleAddNewProject}
				onNewProjectChange={handleNewProjectChange}
			/>
		</div>
	);
}

export default MainContent;
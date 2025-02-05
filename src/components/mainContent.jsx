import React from "react";
import FormProject from "./FormProject";
import { useState, useEffect } from "react";
import { useApiData } from "./ApiState";

const PATH_NOTES = import.meta.env.VITE_API_PATH_NOTES;

// Estrutura padrão de um projeto
const defaultProject = {
	id: "",
	project: "",
	title: "",
	text: "",
};

function MainContent({ activeProject }) {
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [newProject, setNewProject] = useState({ ...defaultProject }); // Estado para o novo projeto
	const data = useApiData(PATH_NOTES);

	useEffect(() => {
		if (activeProject === 'ADD_Project') {
			return;
		}

		const filtered = data.filter((project) => project.project === activeProject);
		setFilteredProjects(filtered.map(project => ({ ...project, isEditing: false }))); // Adiciona um campo isEditing a cada projeto
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

	const handleSave = (id) => {
		// Aqui você pode adicionar a lógica para salvar as alterações no backend
		console.log("Salvando alterações para o item com ID:", id);
		setFilteredProjects(prevProjects =>
			prevProjects.map(project =>
				project.id === id ? { ...project, isEditing: false } : project
			)
		);
	};

	const handleAddNewProject = () => {
		// Adiciona o novo projeto à lista
		const newId = filteredProjects.length + 1; // Gera um ID simples (substitua por uma lógica adequada)
		const projectToAdd = { ...newProject, id: newId, isEditing: false };
		setFilteredProjects([...filteredProjects, projectToAdd]);
		setNewProject({ ...defaultProject }); // Limpa o formulário de novo projeto
	};

	const handleNewProjectChange = (key, value) => {
		// Atualiza o estado do novo projeto
		setNewProject(prev => ({ ...prev, [key]: value }));
	};

	// Define as chaves a serem renderizadas
	const keys = Object.keys(filteredProjects[0] || defaultProject).filter(key => key !== "isEditing");

	return (
		<div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 col-xxl-10">
			<ul className="list-group">
				{filteredProjects.map((item) => {
					const isEditing = item.isEditing; // Verifica se o item atual está sendo editado

					return (
						<li key={item.id} className="list-group-item">
							<div>
								{keys.map((key) => (
									<div key={key}>
										<label className="form-label" style={{ padding: '0px', paddingRight: '5px' }}>
											{key}:
										</label>
										{key === "text" ? (
											<textarea
												value={item[key]}
												readOnly={!isEditing}
												onChange={(e) => {
													// Atualiza o valor do campo "text" no estado local
													const updatedProjects = filteredProjects.map(project =>
														project.id === item.id ? { ...project, [key]: e.target.value } : project
													);
													setFilteredProjects(updatedProjects);
												}}
												rows={3} // Número de linhas do textarea
												style={{ width: "100%" }}
											/>
										) : (
											<input
												type="text"
												value={item[key]}
												readOnly={!isEditing}
												onChange={(e) => {
													// Atualiza o valor do campo no estado local
													const updatedProjects = filteredProjects.map(project =>
														project.id === item.id ? { ...project, [key]: e.target.value } : project
													);
													setFilteredProjects(updatedProjects);
												}}
											/>
										)}
									</div>
								))}
							</div>

							<div style={{ display: 'inline-flex' }}>
								<div className="form-check" style={{ paddingRight: '10px' }}>
									<input
										className="form-check-input"
										type="checkbox"
										id={`formCheck-${item.id}`}
										checked={isEditing}
										onChange={() => handleEdit(item.id)}
									/>
									<label className="form-check-label" htmlFor={`formCheck-${item.id}`}>
										Editar
									</label>
								</div>

								{isEditing && (
									<button className="btn btn-primary" type="button" onClick={() => handleSave(item.id)}>
										Atualizar
									</button>
								)}
							</div>
						</li>
					);
				})}

				{/* Novo item para adicionar projetos */}
				<li className="list-group-item">
					<div>
						{keys.map((key) => (
							<div key={key}>
								<label className="form-label" style={{ padding: '0px', paddingRight: '5px' }}>
									{key}:
								</label>
								{key === "text" ? (
									<textarea
										value={newProject[key] || ""}
										onChange={(e) => handleNewProjectChange(key, e.target.value)}
										rows={3}
										style={{ width: "100%" }}
									/>
								) : (
									<input
										type="text"
										value={newProject[key] || ""}
										onChange={(e) => handleNewProjectChange(key, e.target.value)}
									/>
								)}
							</div>
						))}
					</div>
					<button
						className="btn btn-success mt-2"
						type="button"
						onClick={handleAddNewProject}
					>
						Adicionar
					</button>
				</li>
			</ul>
		</div>
	);
}

export default MainContent;
import React from "react";

const AddTaskForm = ({ newProject, onAddProject, onNewProjectChange }) => {
	const keys = Object.keys(newProject).filter(key => key !== "isEditing");

	return (
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
								onChange={(e) => onNewProjectChange(key, e.target.value)}
								rows={3}
								style={{ width: "100%" }}
							/>
						) : (
							<input
								type="text"
								value={newProject[key] || ""}
								onChange={(e) => onNewProjectChange(key, e.target.value)}
							/>
						)}
					</div>
				))}
			</div>
			<button
				className="btn btn-success mt-2"
				type="button"
				onClick={onAddProject}
			>
				Adicionar
			</button>
		</li>
	);
};

export default AddTaskForm;
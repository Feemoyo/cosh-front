import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ projects, onEdit, onSave, onFieldChange }) => {
	return (
		<ul className="list-group">
			{projects.map((item) => (
				<TaskItem
					key={item.id}
					item={item}
					isEditing={item.isEditing}
					onEdit={onEdit}
					onSave={onSave}
					onFieldChange={onFieldChange}
				/>
			))}
		</ul>
	);
};

export default TaskList;
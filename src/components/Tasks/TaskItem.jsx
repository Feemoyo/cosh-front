import React from "react";

const TaskItem = ({ item, isEditing, onEdit, onSave, onFieldChange }) => {
	return (
		<li className="list-group-item">
			<div>
				{/* Exibe o campo "Título" */}
				<div>
					<label className="form-label" style={{ padding: '0px', paddingRight: '5px' }}>
						Responsavel:
					</label>
					<input
						type="text"
						value={item.accountable}
						readOnly={!isEditing}
						onChange={(e) => onFieldChange(item.id, "title", e.target.value)}
					/>
				</div>

				{/* Exibe o campo "Descrição" */}
				<div>
					<label className="form-label" style={{ padding: '0px', paddingRight: '5px' }}>
						Descrição:
					</label>
					<textarea
						value={item.text}
						readOnly={!isEditing}
						onChange={(e) => onFieldChange(item.id, "text", e.target.value)}
						rows={3}
						style={{ width: "100%" }}
					/>
				</div>

				<div>
					<label className="form-label" style={{ padding: '0px', paddingRight: '5px' }}>
						Concluído:
					</label>
					<input
						type="checkbox"
						checked={item.done || false} // Define o estado do checkbox com base em item.done
						disabled={!isEditing} // Desabilita o checkbox quando não estiver no modo de edição
						onChange={(e) => {
							if (isEditing) { // Só permite alterações se estiver no modo de edição
								onFieldChange(item.id, "done", e.target.checked);
							}
						}}
					/>
					<label className="form-check-label" style={{ marginLeft: '5px' }}>
						{item.done ? "Sim" : "Não"}
					</label>
				</div>

			</div>

			<div style={{ display: 'inline-flex' }}>
				<div className="form-check" style={{ paddingRight: '10px' }}>
					<input
						className="form-check-input"
						type="checkbox"
						id={`formCheck-${item.id}`}
						checked={isEditing}
						onChange={() => onEdit(item.id)}
					/>
					<label className="form-check-label" htmlFor={`formCheck-${item.id}`}>
						Editar
					</label>
				</div>

				{isEditing && (
					<button className="btn btn-primary" type="button" onClick={() => onSave(item.id)}>
						Atualizar
					</button>
				)}
			</div>
		</li>
	);
};

export default TaskItem;
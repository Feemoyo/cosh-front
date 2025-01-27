import { useState } from 'react';
import { ACCESS_TOKEN } from '../constants';
import api from '../api';

function FormProject() {
	const [name, setName] = useState('');
	const [customer, setCustomer] = useState('');
	const [dateStart, setDateStart] = useState('');
	const [accountable, setAccountable] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();

		const formData = new FormData();
		formData.append('name', name);
		formData.append('customer', customer);
		formData.append('dateStart', dateStart);
		formData.append('accountable', accountable);

		try {
			const response = await api.post(import.meta.env.VITE_API_PATH_PROJECTS, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
				},
			});
			alert('Projeto criado:', response.data);
		} catch (error) {
			alert('Erro ao criar o projeto:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} id="form-projects" className="pt-0 mt-0 pb-0 ps-0 pe-0">
			<div className="input-group">
				<span className="input-group-text project-span">
					Name
				</span>
				<input
					className="form-control"
					type="text"
					value={name}
					onChange={(event) => setName(event.target.value)}
					required
				/>
			</div>
			<div className="input-group">
				<span className="input-group-text project-span">
					Customer
				</span>
				<input
					className="form-control"
					type="text"
					value={customer}
					onChange={(event) => setCustomer(event.target.value)}
				/>
			</div>
			<div className="input-group">
				<span className="input-group-text project-span">
					DateStart
				</span>
				<input
					className="form-control"
					type="date"
					value={dateStart}
					onChange={(event) => setDateStart(event.target.value)}
				/>
			</div>
			<div className="input-group">
				<span className="input-group-text project-span">
					Accountable
				</span>
				<input
					className="form-control"
					type="text"
					value={accountable}
					onChange={(event) => setAccountable(event.target.value)}
				/>
			</div>
			<button className="btn btn-primary" type="button" onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
};

export default FormProject;

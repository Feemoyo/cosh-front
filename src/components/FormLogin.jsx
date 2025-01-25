import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";

function FormLogin({ route, method }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();

		// Criando um objeto FormData
		const formData = new FormData();
		formData.append("username", username);
		formData.append("password", password);

		try {
			const response = await api.post(route, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			localStorage.setItem(ACCESS_TOKEN, response.data.access);
			localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
			navigate('/checklist');
		} catch (error) {
			console.error('Error logging in:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="text-center">
			<div className="mb-3">
				<input
					className="form-control"
					type="text"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
					name="username"
					placeholder="Login"
					required
				/>
			</div>
			<div className="mb-3">
				<input
					className="form-control"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					name="password"
					placeholder="Password"
					required
				/>
			</div>
			<div className="mb-3">
				<button className="btn btn-primary d-block w-100" type="submit" disabled={loading}>
					{loading ? "Carregando..." : "Login"}
				</button>
			</div>
		</form>
	);
}

export default FormLogin;

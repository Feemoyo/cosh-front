import { useState, useEffect, createContext, useContext } from "react";
import api from "../api";

const ApiStateContext = createContext();

export const ApiStateProvider = ({ children }) => {
	const [data, setData] = useState({});

	return (
		<ApiStateContext.Provider value={{ data, setData }}>
			{children}
		</ApiStateContext.Provider>
	);
};

export const useApiData = (route) => {
	const { data, setData } = useContext(ApiStateContext);

	useEffect(() => {
		if (!data[route]) {
			const fetchData = async () => {
				try {
					const response = await api.get(route);
					console.log("Dados da API:", response.data);

					setData((prevData) => ({
						...prevData,
						[route]: response.data,
					}));
				} catch (error) {
					console.error("Erro ao buscar dados da API:", error);
				}
			};

			fetchData();
		}
	}, [route, setData]);

	const postData = async (newData) => {
		try {
			const response = await api.post(route, newData, {
				headers: {
					"Content-Type": "multipart/form-data",
				}
			});
			console.log("Dados enviados com sucesso:", response.data);

			setData((prevData) => ({
				...prevData,
				[route]: [...(prevData[route] || []), response.data],
			}));
		} catch (error) {
			console.error("Erro ao enviar dados para a API:", error);
		}
	};

	const putData = async (id, newData) => {
		try {
			const response = await api.put(`${route}${id}/`, newData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("Dados atualizados com sucesso:", response.data);

			setData((prevData) => ({
				...prevData,
				[route]: prevData[route].map((item) =>
					item.id === id ? response.data : item
				),
			}));
		} catch (error) {
			console.error("Erro ao atualizar dados na API:", error);
		}
	};

	return { data: data[route], postData, putData };
};
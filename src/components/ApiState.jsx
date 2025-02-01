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

	return data[route];
};
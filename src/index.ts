import axios from 'axios';
class ApiMultas {

	multas = async (state:string, host: string, token: string, data: Record<string, any>) => {

		try {
			
			const response = await axios.request({
				method: 'POST',
				url: `${host}/multas/${state}`,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'User-Agent': 'APIBRASIL/API-MULTAS',
					'token': `${token}`,
				},
				data: data,
			})

			return response.data;

		} catch (e: any) {
			return e.response.data;
		}

	};

};

export default ApiMultas;

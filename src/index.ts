import axios from 'axios';

class ApiMultas {

	multas = async (state:string, host: string, token: string, data: Record<string, any>) => {
		try {
			
			const request = await axios.request({
				method: 'POST',
				url: `${host}/multas/${state}`,
				headers: {
					'token': `${token}`,
					'User-Agent': 'APIBRASIL/API-MULTAS',
				},
				data: data,
			})

			const response = await request;

			return response.data;

		} catch (e: any) {
			
			return e.response.data;

		}
	};

};

export default ApiMultas;

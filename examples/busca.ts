import ApiMultas from '../src/index';

(async () => {

    const host = 'http://localhost:2222';
    const token = '1234567890';

    const api = new ApiMultas();

    const request = await api.multas('mg', host, token, {
        placa: 'ABC1234',
        renavam: '123456789'
    });

    console.log(request);

})();


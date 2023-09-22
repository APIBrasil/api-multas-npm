# 💵 API de Multas Brasil
A ideia desse repositório é obter dados de Multas de todos os Detrans, através de Web Scrap e retornar os dados das multas em JSON

## Estados suportados
Ainda não suportamos todos os estados, em breve  iremos adicionar mais estados, se quiser sugerir um estado, abra uma PR

## Servidor Back-end
Você irá precisar subir um servidor Backend para consumir esse pacote

<a href="https://github.com/APIBrasil/api-multas"> https://github.com/APIBrasil/api-multas </a>

Ou de um servidor de API

<a href="https://apibrasil.io"> https://apibrasil.io </a>

## Estados suportados
Ainda não suportamos todos os estados, em breve  iremos adicionar mais estados, se quiser sugerir um estado, abra uma PR

|    DETRANS    |   SITUAÇÃO        |   DISPONIBILIDADE    |    OBSERVAÇÕES              |
|---------------|-------------------|----------------------|------------------------------
|    Detran MG	|	DISPONÍVEL      |    Operacional       |                             |
|    Detran AL	|	DISPONÍVEL      |    Operacional       |                             |   
|    Detran PB	|	DISPONÍVEL      |    Operacional       |                             |
|    Detran GO	|	DISPONÍVEL      |    Operacional       |                             |
|    Detran MA	|   DISPONÍVEL      |    Operacional       |                             |
|    Detran DF	|   DISPONÍVEL      |    Operacional       |                             |
|    Detran MS	|	DISPONÍVEL      |    Operacional       |                             |
|    Detran PE	|   DISPONÍVEL      |    Operacional       |                             |
|    Detran SE	|   DISPONÍVEL      |    Operacional       |                             |
|    Detran PR	|   DISPONÍVEL      |    Operacional       |                             |
|    Detran PI	|   DISPONÍVEL      |    Operacional       | Nacessário informar webhook |
|    Detran AC	|Em desenvolvimento |                      |                             |
|    Detran AM	|Em desenvolvimento |                      |                             |
|    Detran BA	|Em desenvolvimento |                      |                             |
|    Detran CE	|Em desenvolvimento |                      |                             |
|    Detran ES	|Em desenvolvimento |                      |                             |
|    Detran MT	|Em desenvolvimento |                      |                             |
|    Detran PA	|Em desenvolvimento |                      |                             |
|    Detran RJ	|Em desenvolvimento |                      |                             |
|    Detran RN	|Em desenvolvimento |                      |                             |
|    Detran RO	|Em desenvolvimento |                      |                             |
|    Detran RR	|Em desenvolvimento |                      |                             |
|    Detran RS	|Em desenvolvimento |                      |                             |
|    Detran SC	|Em desenvolvimento |                      |                             |
|    Detran SP	|Em desenvolvimento |                      |                             |
|    Detran TO  |Em desenvolvimento |                      |                             |

## Como instalar usando npm

```npm i api-multas```

## Como instalar usando yarn
```yarn add api-multas```

## Como consumir com TypeScript
```ts
import ApiMultas from 'api-multas'

(async () => {

    const host = 'http://localhost:2222';
    const token = '1234567890';

    const api = new ApiMultas();

    const request = await api.multas('mg', host, token, {
        placa: 'ABC1234',
        renavam: '0000000000'
    });

    console.log(request);

})();
```

Oservações para o estado de PI, que por ter captcha é necessário obter uma chave do <a href="2captcha.com" target="_blank" > 2captcha </a>

```ts
import ApiMultas from 'api-multas'

(async () => {

    const host = 'http://localhost:2222';
    const token = '1234567890';

    const api = new ApiMultas();

    //use o webhook.site para visualizar o retorno
    const request = await api.multas('mg', host, token, {
        placa: "ABC1234",
        renavam: "0000000000",
        twocaptchaapikey: "abc1234abc1234abc1234abc1234",
        webhook: "https://webhook.site/3545dc20-14ff-4c74-bee0-755762fd834a"
    });

    console.log(request);

})();
```
## Possiveis respostas
```json
{
    "placa": "ABC1234",
    "renavam": "00000000000",
    "multas": [
        {
            "sequencia": "1",
            "processo": "00000000",
            "descricao": "TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE 2",
            "local": "AV. RISOLETA NEVES  A 138M DA RUA RAIMUNDA FERREIR",
            "valor": 152.11
        },
        {
            "sequencia": "2",
            "processo": "00000000",
            "descricao": "DIRIGIR VEICULO SEGURANDO TELEFONE CELULAR",
            "local": "AVE AFONSO SILVA ESQUINA RUA ESPIRITO DE LUZ",
            "valor": 299.54
        }
    ]
}
```
## Observações
⚠️ Essa API é apenas parte de um estudo pessoal, use em produção por sua conta e risco, lembre-se essa API se basea em técnicas de web scrap para obter os dados em transformar em JSON, se o DETRAN do seu estado alterar algo nos avise para que possamos corrgir.

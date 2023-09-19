# 💵 API de Multas Brasil
A ideia desse repositório é obter dados de Multas de todos os Detrans, através de Web Scrap e retornar os dados das multas em JSON

# Estados suportados
Ainda não suportamos todos os estados, em breve  iremos adicionar mais estados, se quiser sugerir um estado, abra uma PR

# Servidor Back-end

Você irá precisar subir um servidor backend para consumir esse pacote

https://github.com/APIBrasil/api-multas


|    DETRANS    |   SITUAÇÃO        |   DISPONIBILIDADE    |
|---------------|-------------------|----------------------|
|    Detran AC	|Em desenvolvimento |                      |
|    Detran AL	|	DISPONÍVEL      |    Operacional       |   
|    Detran DF	|   DISPONÍVEL      |    Operacional       |
|    Detran GO	|	DISPONÍVEL      |    Operacional       |
|    Detran MG	|	DISPONÍVEL      |    Operacional       |
|    Detran MS	|	DISPONÍVEL      |    Operacional       |
|    Detran PB	|	DISPONÍVEL      |    Operacional       |
|    Detran PE	|   DISPONÍVEL      |    Operacional       |
|    Detran SE	|   DISPONÍVEL      |    Operacional       |
|    Detran AM	|Em desenvolvimento |                      |
|    Detran BA	|Em desenvolvimento |                      |
|    Detran CE	|Em desenvolvimento |                      |
|    Detran ES	|Em desenvolvimento |                      |
|    Detran MA	|Em desenvolvimento |                      |
|    Detran MT	|Em desenvolvimento |                      |
|    Detran PA	|Em desenvolvimento |                      |
|    Detran PR	|Em desenvolvimento |                      |
|    Detran RJ	|Em desenvolvimento |                      |
|    Detran RN	|Em desenvolvimento |                      |
|    Detran RO	|Em desenvolvimento |                      |
|    Detran RR	|Em desenvolvimento |                      |
|    Detran RS	|Em desenvolvimento |                      |
|    Detran SC	|Em desenvolvimento |                      |
|    Detran SP	|Em desenvolvimento |                      |
|    Detran TO  |Em desenvolvimento |                      |

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
        renavam: '123456789'
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
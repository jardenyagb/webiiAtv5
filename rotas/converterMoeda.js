const fetch = require ('node-fetch')

const converter = async (req, res) => {
    let urlApi = "https://economia.awesomeapi.com.br/last/BRL-USD"
    let  moedaFetch= await fetch(urlApi)
    let dadoresults = await moedaFetch.json()
    let resultado = (dadoresults["BRLUSD"].bid)
    let valorConvertido = (req.params.valor_real*resultado)
    return(res.json({valorConvertido}))
}

module.exports = {converter}
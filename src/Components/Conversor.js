import React, { useRef, useState } from "react"

export default function Conversor ({moedaA,moedaB}) {
    const [moedaA_valor, setMoedaA] = useState('');
    const [moedaB_valor, setMoedaB] = useState(0);

    const API_KEY = 'sua api key'

    function converter() {
        let url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${moedaB}&base_currency=${moedaA}`
        
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json.data[moedaB].value
                let moedaB_valor = (parseFloat(moedaA_valor) * cotacao).toFixed(2)
                setMoedaB( moedaB_valor )
            })
    }

    return (
        <div className="conversor">
            <h2>Converter {moedaA} para {moedaB}</h2>
            <input type="text" onChange={(event)=>{setMoedaA(event.target.value)}}></input>
            <input type="button" value="Converter" onClick={converter}></input>
            <h2>{moedaB_valor}</h2>
        </div>
    )
}
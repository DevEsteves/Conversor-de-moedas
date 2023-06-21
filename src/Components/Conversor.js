import React, { useRef, useState } from "react"

export default function Conversor ({moedaA,moedaB}) {
    const [moedaA_valor, setMoedaA] = useState('');
    const [moedaB_valor, setMoedaB] = useState(0);

    function converter() {
        let url = `Coloque aqui sua url`
        
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
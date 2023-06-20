import React, { useState } from "react"

export const Conversor = () => {
    const [moedaA_valor, setMoedaA] = useState('');
    const [moedaB_valor, setMoedaB] = useState(0);

    function converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `Coloque aqui sua url`
        
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para]
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
            })
    }

    return (
        <div className="conversor">
            <h2>Converter {moedaA_valor} para {moedaB_valor}</h2>
            <input type="text" onChange={(event)=>{setMoedaA({moedaA_valor:event.target.value})}}></input>
            <input type="button" value="Converter" onClick={this.converter}></input>
            <h2>{this.state.moedaB_valor}</h2>
        </div>
    )
}
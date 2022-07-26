import React from "react";

const Fruta = ({fruta}) =>{

    return(
    <div className="Fruta">
        <ul>
            <li>
                <strong>Fruta: </strong> {fruta.nome}
            </li>
            <li>
                <strong>Quantidade: </strong> {fruta.quantidade}
            </li>
        </ul>
        <button onClick={()=>alert(fruta.div)}>Remover</button>
    </div>);

}

export default Fruta;
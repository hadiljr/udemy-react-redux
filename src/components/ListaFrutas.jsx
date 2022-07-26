import React from "react";
import AdicionaFruta from "./AdicionaFruta";
import Fruta from "./Fruta";

const ListaFrutas = () =>{

    const frutas = [
        {id: 1, nome:'fruta1', quantidade:5},
        {id: 2, nome:'fruta2', quantidade:1},
        {id: 3, nome:'fruta3', quantidade:52},
    ];

    return (
    <>
        <h1>Lista de Frutas</h1>

        <AdicionaFruta/>

        {frutas.map(fruta => (
            <Fruta key={fruta.id} fruta={fruta}/>
        ))}
    </>);
}

export default ListaFrutas;
import React from "react";
import {useDispatch} from 'react-redux';
import {frutaRemoved} from "../redux/slices/frutasSlice";

const Fruta = ({fruta}) =>{

    const dispatch = useDispatch();

    return(
    <div className="fruta">
        <ul>
            <li>
                <strong>Fruta: </strong> {fruta.nome}
            </li>
            <li>
                <strong>Quantidade: </strong> {fruta.quantidade}
            </li>
        </ul>
        <button onClick={()=>dispatch(frutaRemoved(fruta))}>&times;</button>
    </div>);

}

export default Fruta;
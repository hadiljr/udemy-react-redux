import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {frutaAdded} from "../redux/slices/frutasSlice";

const AdicionaFruta = () =>{

    const [nome,setNome] = useState('');
    const [quantidade,setQuantidade] = useState(0);

    const dispatch = useDispatch();

    const adicionarFruta = event =>{
        event.preventDefault();

        const fruta = {
            id: new Date(),
            nome,
            quantidade
        }

        dispatch(frutaAdded(fruta));
    }

    return(
        <form onSubmit={adicionarFruta}>
            <input type="text" 
                    name={nome} 
                    placeholder="Fruta" 
                    required 
                    onChange={event => setNome(event.target.value)}/>

            <input type="number" 
                    name={quantidade} 
                    placeholder="Quantidade" 
                    required 
                    onChange={event => setQuantidade(event.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
    )

}

export default AdicionaFruta;
'use client'

import { deleteSpin1 } from "@/services";
import { useState } from "react"

export const DeletarSpin = () => {

    const [id, setId] = useState('');

    const handleDeletarSpin = () => {
        deleteSpin1(parseFloat(id));
        alert('Deletado com sucesso!');
    }

    return(
        <div>
            <p>Id:</p>
            <input 
                type="text" 
                placeholder="Digite o id"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleDeletarSpin}>Apagar</button>
        </div>
    )
}
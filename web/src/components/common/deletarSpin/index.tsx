'use client'

import { useSpinContext } from "@/context";
import { deleteSpin1, deleteSpin2, deleteSpin3 } from "@/services";
import { useState } from "react"

export const DeletarSpin = () => {

    const { spin } = useSpinContext();

    const [valorSelecionado, setValorSelecionado] = useState<String>("");

    const handleSelecaoSpin = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValorSelecionado(event.target.value);
    }

    const [id, setId] = useState('');

    const handleDeletarSpin = () => {
        if (valorSelecionado == "1") {
            deleteSpin1(parseFloat(id));
        } else if (valorSelecionado == "2") {
            deleteSpin2(parseFloat(id));
        } else if (valorSelecionado == "3") {
            deleteSpin3(parseFloat(id));
        }

        alert('Deletado com sucesso!');
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex gap-5">
                <p>Choose the spin value: </p>
                <select name="" id="" onChange={handleSelecaoSpin}>
                    {spin.map((item) => (
                        <option value={item.id}>{item.valorSpin}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-center items-center gap-5">
                <p>Id:</p>
                <input
                    type="text"
                    placeholder=" Digite o id"
                    className="h-10"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <button onClick={handleDeletarSpin} className="bg-primary p-4 rounded-md text-branco font-bold hover:bg-azul_hover flex justify-center items-center gap-1">Apagar</button>
        </div>
    )
}
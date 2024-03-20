'use client'

import { Spin1, Spin2, Spin3 } from "@/components";
import { useSpinContext } from "@/context";
import { useSession } from "next-auth/react"
import React, { useState } from "react";

export default function PublicPage() {

    const { data: session } = useSession();
    const { spin1, spin } = useSpinContext();

    const [valorSelecionado, setValorSelecionado] = useState<String>("");

    const handleSelecaoSpin = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValorSelecionado(event.target.value);
    }

    return (
        <div className="w-full h-screen flex flex-col pt-32 items-center bg-background">
            <h1>Dados por spin</h1>
            <div className="flex gap-4">
                <p>Valor do spin da sub-rede A:</p>
                <div>
                    <select id="frutas" name="frutas">
                        <option value="meio">1/2</option>
                    </select>
                </div>
                <p>Valor do spin da sub-rede B:</p>
                <div className="text-preto">
                    <select name="" id="" onChange={handleSelecaoSpin}>
                        {spin.map((item) => (
                            <option value={item.id}>{item.valorSpin}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full">
                {valorSelecionado === "1" && <Spin1 />}
                {valorSelecionado === "2" && <Spin2 />}
                {valorSelecionado === "3" && <Spin3 />}
            </div>
        </div>
    )
}
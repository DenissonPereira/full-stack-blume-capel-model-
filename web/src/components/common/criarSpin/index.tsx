'use client'

import { Spin } from "@/model";
import { createSpin1 } from "@/services";
import { error } from "console";
import { useState } from "react"

export const CriarSpin = () => {

    const [temperatura, setTemperatura] = useState('');
    const [m_a, setM_a] = useState('');
    const [m_b, setM_b] = useState('');
    const [mag_staggered, setMag_staggered] = useState('');
    const [mag_total, setMag_total] = useState('');

    const handleCreateSpin = async () => {
        const newSpin: Spin = {
            id: 0,
            temperatura: parseFloat(temperatura),
            m_a: parseFloat(m_a),
            m_b: parseFloat(m_b),
            mag_staggered: parseFloat(mag_staggered),
            mag_total: parseFloat(mag_total)
        }

        createSpin1(
            newSpin,
            () => {
                alert('Novo array criado com sucesso!')
            },
            (error) => {
                alert('Erro ao criar!')
                console.error('Erro ao criar: ', error)
            }
        )
    }


    return (
        <div className="w-full h-screen flex justify-center items-center bg-background">
            <h1 className="text-center">Publica privata</h1>
            <div>
                <p>temperatura:</p>
                <input 
                    type="text" 
                    placeholder="temperatura aqui"
                    value={temperatura}
                    onChange={(e) => setTemperatura(e.target.value)}
                />
            </div>
            <div>
                <p>m_a:</p>
                <input 
                    type="text" 
                    placeholder="m_a aqui"
                    value={m_a}
                    onChange={(e) => setM_a(e.target.value)}
                />
            </div>
            <div>
                <p>m_b:</p>
                <input 
                    type="text" 
                    placeholder="m_b aqui"
                    value={m_b}
                    onChange={(e) => setM_b(e.target.value)}
                />
            </div>
            <div>
                <p>m_staggered: </p>
                <input 
                    type="text" 
                    placeholder="m_staggered aqui"
                    value={mag_staggered}
                    onChange={(e) => setMag_staggered(e.target.value)}
                />
            </div>
            <div>
                <p>m_total</p>
                <input 
                    type="text" 
                    placeholder="m_total aqui"
                    value={mag_total}
                    onChange={(e) => setMag_total(e.target.value)}
                />
            </div>
            <button onClick={handleCreateSpin}>Criar novo</button>
        </div>
    )
}
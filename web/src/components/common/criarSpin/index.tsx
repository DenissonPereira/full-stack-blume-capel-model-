'use client'

import { useSpinContext } from "@/context";
import { Spin } from "@/model";
import { createSpin1, createSpin2, createSpin3 } from "@/services";
import { error } from "console";
import { useState } from "react"

export const CriarSpin = () => {

    const { spin } = useSpinContext();

    const [temperatura, setTemperatura] = useState('');
    const [m_a, setM_a] = useState('');
    const [m_b, setM_b] = useState('');
    const [mag_staggered, setMag_staggered] = useState('');
    const [mag_total, setMag_total] = useState('');

    const [valorSelecionado, setValorSelecionado] = useState<String>("");

    const handleSelecaoSpin = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValorSelecionado(event.target.value);
    }

    const handleCreateSpin = async () => {
        const newSpin: Spin = {
            id: 0,
            temperatura: parseFloat(temperatura),
            m_a: parseFloat(m_a),
            m_b: parseFloat(m_b),
            mag_staggered: parseFloat(mag_staggered),
            mag_total: parseFloat(mag_total)
        }

        if (valorSelecionado == "1") {
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

        else if (valorSelecionado == "2") {
            createSpin2(
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

        else if (valorSelecionado == "3") {
            createSpin3(
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
    }


    return (
        <div className="w-full flex flex-col justify-start items-center bg-background gap-2">
            <div className="flex gap-5 pb-5">
                <p>Choose the spin value: </p>
                <select name="" id="" onChange={handleSelecaoSpin}>
                    {spin.map((item) => (
                        <option value={item.id}>{item.valorSpin}</option>
                    ))}
                </select>
            </div>
            <div className="flex gap-5">
                <p>V_temperature:</p>
                <input
                    type="text"
                    className="h-10 rounded-md"
                    placeholder=" Temperature value"
                    value={temperatura}
                    onChange={(e) => setTemperatura(e.target.value)}
                />
            </div>
            <div className="flex gap-5">
                <p>Magnetization_a</p>
                <input
                    type="text"
                    className="h-10 rounded-md"
                    placeholder=" Sublattice magnetization A"
                    value={m_a}
                    onChange={(e) => setM_a(e.target.value)}
                />
            </div>
            <div className="flex gap-5">
                <p>Magnetization_b:</p>
                <input
                    type="text"
                    className="h-10 rounded-md"
                    placeholder=" Sublattice magnetization A"
                    value={m_b}
                    onChange={(e) => setM_b(e.target.value)}
                />
            </div>
            <div className="flex gap-5">
                <p>Magnetization_s: </p>
                <input
                    type="text"
                    placeholder=" Staggered Magnetization "
                    className="h-10 rounded-md"
                    value={mag_staggered}
                    onChange={(e) => setMag_staggered(e.target.value)}
                />
            </div>
            <div className="flex gap-5 pb-5">
                <p>Magnetization_t</p>
                <input
                    type="text"
                    className="h-10 rounded-md"
                    placeholder=" Total Magnetization"
                    value={mag_total}
                    onChange={(e) => setMag_total(e.target.value)}
                />
            </div>
            <button onClick={handleCreateSpin} className="bg-primary p-4 rounded-md text-branco font-bold hover:bg-azul_hover flex justify-center items-center gap-1">Create new</button>
        </div>
    )
}
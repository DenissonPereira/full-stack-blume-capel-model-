'use client'

import { useSpinContext } from "@/context";
import { useSession } from "next-auth/react"

export default function PublicPage() {

    const { data: session } = useSession();
    const { spin1, spin } = useSpinContext();

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-background">
            <h1>Dados por spin</h1>
            <div>
                <p>Escolha uma fruta:</p>
                <div>
                    <select id="frutas" name="frutas">
                        <option value="meio">1/2</option>
                    </select>
                </div>
                <p>Escolha uma frutas:</p>
                <div>
                    <select id="frutas" name="frutas">
                        <option value="maca">1</option>
                        <option value="banana">2</option>
                        <option value="laranja">3</option>
                    </select>
                </div>
                <div className="text-preto">
                    {spin.map((item) => (
                        <p key={item.id}>i = {item.valorSpin} </p>
                    ))}
                </div>

            </div>
        </div>
    )
}
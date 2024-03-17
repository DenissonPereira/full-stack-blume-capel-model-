'use client'

import { useSpinContext } from "@/context";
import { useSession } from "next-auth/react"

export default function PublicPage() {

    const { data: session } = useSession();
    const {spin1} = useSpinContext();

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-full h-screen flex flex-col items-center mt-52">
                {spin1.map((spin) => (
                    <p>mag: {spin.m_a}</p>
                ))}
            </div>

        </div>
    )
}
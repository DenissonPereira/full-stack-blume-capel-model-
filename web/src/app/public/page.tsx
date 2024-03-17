'use client'

import { useSpinContext } from "@/context";
import { useSession } from "next-auth/react"

export default function PublicPage() {

    const { data: session } = useSession();
    const {spin1, spin3 } = useSpinContext();

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="">
                {spin1.map((spin) => (
                    <p>mag: {spin.m_a}</p>
                ))}
            </div>
            <div>
                {spin3.map((spin) => (
                    <p>red: {spin.mag_total}</p>
                ))}
            </div>

        </div>
    )
}
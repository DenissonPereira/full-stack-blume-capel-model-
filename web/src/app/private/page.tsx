'use client'

import { CriarSpin, DeletarSpin } from "@/components";

export default function PrivatePage() {

    return (
        <div className="w-full h-screen flex justify-center items-center bg-background">
            <h1 className="text-center">Publica privata</h1>
            <CriarSpin />
            <DeletarSpin />
        </div>
    )
}
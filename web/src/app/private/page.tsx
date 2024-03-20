'use client'

import { CriarSpin, DeletarSpin } from "@/components";

export default function PrivatePage() {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-background">
            <h1 className="text-center pb-20 text-6xl font-bold">Create or delete magnetizations</h1>
            <div className="flex gap-40">
                <CriarSpin />
                <DeletarSpin />
            </div>
        </div>
    )
}
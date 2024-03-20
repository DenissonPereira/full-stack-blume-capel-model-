'use client'

import React, { createContext, useContext, useEffect, useState } from "react"
import { Spin, Spins } from "@/model";
import { loadSpin1, loadSpin2, loadSpin3, loadSpins } from "@/services"

type SpinProps = {
    spin1: Spin[];
    setSpin1(spin: Spin[]): void;
    spin2: Spin[];
    setSpin2(spin: Spin[]): void;
    spin3: Spin[];
    setSpin3(spin: Spin[]): void;
    spin: Spins[];
    setSpin(spins: Spins[]): void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<SpinProps>({} as SpinProps);

export const SpinProvider:React.FC<Props> =  ({children}: Props) => {
    const [spin1, setSpin1] = useState<Spin[]>([]);
    const [spin2, setSpin2] = useState<Spin[]>([]);
    const [spin3, setSpin3] = useState<Spin[]>([]);
    const [spin, setSpin] = useState<Spins[]>([]);

    useEffect(()=> {
        loadSpin1(setSpin1);
        loadSpin2(setSpin2);
        loadSpin3(setSpin3);
        loadSpins(setSpin);
    }, [])

    const values = { spin1, setSpin1, spin2, setSpin2, spin3, setSpin3, spin, setSpin }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
}

export const useSpinContext = () => {
    const spinConstante = useContext(Context);
    return spinConstante;
}
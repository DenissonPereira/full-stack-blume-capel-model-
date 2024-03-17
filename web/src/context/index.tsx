'use client'

import React, { createContext, useContext, useEffect, useState } from "react"
import { Spin } from "@/model";
import { loadSpin1 } from "@/services/spin1"
import { loadSpin2 } from "@/services/spin2";
import { loadSpin3 } from "@/services/spin3";

type SpinProps = {
    spin1: Spin[];
    setSpin1(spin: Spin[]): void;
    spin2: Spin[];
    setSpin2(spin: Spin[]): void;
    spin3: Spin[];
    setSpin3(spin: Spin[]): void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<SpinProps>({} as SpinProps);

export const SpinProvider:React.FC<Props> =  ({children}: Props) => {
    const [spin1, setSpin1] = useState<Spin[]>([]);
    const [spin2, setSpin2] = useState<Spin[]>([]);
    const [spin3, setSpin3] = useState<Spin[]>([]);

    useEffect(()=> {
        loadSpin1(setSpin1);
        loadSpin2(setSpin2);
        loadSpin3(setSpin3);
    }, [])

    return (
        <Context.Provider value={{spin1, setSpin1, spin2, setSpin2, spin3, setSpin3}}>
            {children}
        </Context.Provider>
    );
}

export const useSpinContext = () => {
    const spin = useContext(Context);
    return spin;
}
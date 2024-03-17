'use client'

import React, { createContext, useContext, useEffect, useState } from "react"
import { Spin } from "@/model";
import { loadSpin1 } from "@/services/spin1"

type SpinProps = {
    spin1: Spin[];
    setSpin1(spin: Spin[]): void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<SpinProps>({} as SpinProps);

export const SpinProvider:React.FC<Props> =  ({children}: Props) => {
    const [spin1, setSpin1] = useState<Spin[]>([]);

    useEffect(()=> {
        loadSpin1(setSpin1);
    }, [])

    return (
        <Context.Provider value={{spin1, setSpin1}}>
            {children}
        </Context.Provider>
    );
}

export const useSpinContext = () => {
    const spin = useContext(Context);
    return spin;
}
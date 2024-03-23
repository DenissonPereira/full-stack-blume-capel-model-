import React, { createContext, useContext, useEffect, useState } from "react"
import { Spin } from "../model";
import { loadSpin1 } from "../services/spin1Service"

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

    const values = { spin1, setSpin1 }

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
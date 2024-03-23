import React, { createContext, useContext, useEffect, useState } from "react"
import { Spin, Spins } from "../model";
import { loadSpin1 } from "../services/spin1Service"
import { loadSpins } from "../services/spinsService";
import { loadSpin2 } from "../services/spin2Service";
import { loadSpin3 } from "../services/spin3Service";

type SpinProps = {
    spins: Spins[];
    setSpins(spin: Spins[]): void;
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
    const [spins, setSpins] = useState<Spins[]>([]);
    const [spin1, setSpin1] = useState<Spin[]>([]);
    const [spin2, setSpin2] = useState<Spin[]>([]);
    const [spin3, setSpin3] = useState<Spin[]>([]);

    useEffect(()=> {
        loadSpins(setSpins);
        loadSpin1(setSpin1);
        loadSpin2(setSpin2);
        loadSpin3(setSpin3);
    }, [])

    const values = { spins, setSpins, spin1, setSpin1, spin2, setSpin2, spin3, setSpin3 }

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
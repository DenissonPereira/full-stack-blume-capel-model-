import { Spin } from "../model";
import { api } from ".";

export async function loadSpin1(setSpin1: (spin1: Spin[]) => void) {
    try {
        const {data} = await api.get('spin1');
        setSpin1(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}

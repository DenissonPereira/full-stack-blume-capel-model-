import { Spin } from "../model";
import { api } from ".";

export async function loadSpin2(setSpin2: (spin2: Spin[]) => void) {
    try {
        const {data} = await api.get('spin2');
        setSpin2(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}

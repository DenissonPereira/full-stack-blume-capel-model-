import { Spin } from "../model";
import { api } from ".";

export async function loadSpin3(setSpin3: (spin3: Spin[]) => void) {
    try {
        const {data} = await api.get('spin3');
        setSpin3(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}

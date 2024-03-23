import { Spins } from "../model";
import { api } from ".";

export async function loadSpins(setSpins: (spins: Spins[]) => void) {
    try {
        const {data} = await api.get('spins');
        setSpins(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}

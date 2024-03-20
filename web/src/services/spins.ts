import { Spins } from "@/model";

export async function loadSpins(setSpin: (setSpin: Spins[]) => void) {
    try {
        const response = await fetch('http://localhost:8080/spins');
        const jsonData = await response.json();
        setSpin(jsonData);
    } catch(error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
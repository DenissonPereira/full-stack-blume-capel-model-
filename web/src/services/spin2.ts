import { Spin } from "@/model";

export async function loadSpin2(setSpin2: (setSpin1: Spin[]) => void) {
    try {
        const response  = await fetch('http://localhost:8080/spin2');
        const jsonData = await response.json();
        setSpin2(jsonData);
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
import { Spin } from "@/model";

export async function loadSpin3(setSpin3: (setSpin1: Spin[]) => void) {
    try {
        const response  = await fetch('http://localhost:8080/spin3');
        const jsonData = await response.json();
        setSpin3(jsonData);
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
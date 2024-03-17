import { Spin } from "@/model";

export async function loadSpin1(setSpin1: (setSpin1: Spin[]) => void) {
    try {
        const response  = await fetch('http://localhost:8080/spin1');
        const jsonData = await response.json();
        setSpin1(jsonData);
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
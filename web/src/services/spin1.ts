import { Spin } from "@/model";
import { connectServer } from "./connect";

export async function loadSpin1(setSpin1: (spin1: Spin[]) => void) {
    try {
        const {data} = await connectServer.get('/spin1');
        setSpin1(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
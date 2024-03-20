import { Spins } from "@/model";
import { connectServer } from "./connect";

export async function loadSpins(setSpin: (spin: Spins[]) => void) {
    try {
        const {data} = await connectServer.get('/spins');
        setSpin(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
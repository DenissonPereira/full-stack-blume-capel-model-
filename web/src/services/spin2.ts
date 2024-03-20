import { Spin } from "@/model";
import { connectServer } from "./connect";

export async function loadSpin2(setSpin2: (spin2: Spin[]) => void) {
    try {
        const {data} = await connectServer.get('/spin2');
        setSpin2(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
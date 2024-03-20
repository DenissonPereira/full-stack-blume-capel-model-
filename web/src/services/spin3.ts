import { Spin } from "@/model";
import { connectServer } from "./connect";

export async function loadSpin3(setSpin3: (spin3: Spin[]) => void) {
    try {
        const {data} = await connectServer.get('/spin3');
        setSpin3(data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}
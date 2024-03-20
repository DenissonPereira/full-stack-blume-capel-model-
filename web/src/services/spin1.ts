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

export async function createSpin1(newSpin: Spin, onSuccess: () => void, onError: (error: any) => void) {
    try {
        await connectServer.post('/spin1', newSpin);
        onSuccess();
    } catch (error) {
        console.error('Erro ao criar novo Spin: ', error);
        onError(error);
    }
}

export async function deleteSpin1(id: number) {
    try {
        await connectServer.delete(`/spin1/${id}`);
    } catch (error) {
        console.error('Erro ao acessar API: ', error);
    }
}

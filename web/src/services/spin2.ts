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

export async function createSpin2(newSpin: Spin, onSuccess: () => void, onError: (error: any) => void) {
    try {
        await connectServer.post('/spin2', newSpin);
        onSuccess();
    } catch (error) {
        console.error('Erro ao criar novo Spin: ', error);
        onError(error);
    }
}

export async function deleteSpin2(id: number) {
    try {
        await connectServer.delete(`/spin2/${id}`);
    } catch (error) {
        console.error('Erro ao acessar API: ', error);
    }
}

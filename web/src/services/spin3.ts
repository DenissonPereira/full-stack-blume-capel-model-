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

export async function createSpin3(newSpin: Spin, onSuccess: () => void, onError: (error: any) => void) {
    try {
        await connectServer.post('/spin3', newSpin);
        onSuccess();
    } catch (error) {
        console.error('Erro ao criar novo Spin: ', error);
        onError(error);
    }
}

export async function deleteSpin3(id: number) {
    try {
        await connectServer.delete(`/spin3/${id}`);
    } catch (error) {
        console.error('Erro ao acessar API: ', error);
    }
}

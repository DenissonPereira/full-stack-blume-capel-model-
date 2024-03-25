import { DiAtom } from "react-icons/di";

export const Titulo = () => {
    return (
        <div className="flex flex-col items-center md:items-start w-full p-10">
            <div className="md:hidden">
                <DiAtom fontSize={60} color="white" />
            </div>
            <div>
                <h1 className="text-branco font-bold mt-10 text-3xl md:text-5xl lg:text-6xl xl:text-9xl">Blume-Capel Model</h1>
                <h1 className="text-azul_claro text-3xl md:text-5xl lg:text-6xl xl:text-9xl">Magnetizations API</h1>
            </div>
            <hr className="border-t-2 border-azul_claro w-3/6 h-0.5 my-4" />
            <div className="flex flex-col items-start w-full md:w-3/5">
                <p className="text-branco text-center md:text-start text-sm md:text-lg lg:text-xl xl:text-3xl">The API will provide detailed information about magnetizations under different conditions, allowing researchers and physics enthusiasts to access and efficiently utilize this data in their analyses and simulations.</p>
            </div>
        </div>
    )
}

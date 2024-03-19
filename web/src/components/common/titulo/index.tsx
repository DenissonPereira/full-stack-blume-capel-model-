export const Titulo = () => {
    return(
        <div className="flex flex-col items-start max-full p-10">
            <div>
                <h1 className="text-branco text-9xl font-bold mt-10">Blume-Capel Model</h1>
                <h1 className="text-azul_claro text-9xl">Magnetizations API</h1>
            </div>
            <hr className="border-t-2 border-azul_claro w-3/6 h-0.5 my-4" />
            <div className="flex flex-col items-start w-3/5">
                <p className="text-branco text-2xl">The API will provide detailed information about magnetizations under different conditions, allowing researchers and physics enthusiasts to access and efficiently utilize this data in their analyses and simulations.</p>
            </div>
        </div>
    )
}
import Link from "next/link";

export default function DeniedPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1>Acesso restrito</h1>
            <p>Você não tem permissão para proseguir</p>
            <Link href='/' className="p-4 bg-amber-950 text-cyan-50">Voltar</Link>
        </div>
    )
}
import Link from "next/link"
import { SignOutButton } from "../../common"
import { getServerSession } from "next-auth"
import { DiAtom } from "react-icons/di";


const Header = async () => {

    const session = await getServerSession()

    return (
        <header className="fixed w-full h-20 flex items-center bg-primary text-slate-50">
            <nav className="w-full flex item-center justify-between m-auto max-w-screen-xl text-branco text-lg text-br">
                <ul className="flex items-center gap-10">
                    <Link href="/"><DiAtom style={{ fontSize: 50 }} /></Link>
                </ul>
                <ul className="flex items-center gap-10">
                    <li className="hover:bg-laranja p-3 rounded-md cursor-pointer"><Link href="/">Home</Link></li>
                    <li className="hover:bg-laranja p-3 rounded-md cursor-pointer"><Link href="/private">Magnetizations</Link></li>
                    <li className="hover:bg-laranja p-3 rounded-md cursor-pointer"><Link href="/public">About</Link></li>
                    {session && <li className="hover:bg-laranja p-3 rounded-md cursor-pointer"><SignOutButton /></li>}
                </ul>
            </nav>
        </header>
    )
}

export{ Header }



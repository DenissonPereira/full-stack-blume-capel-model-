import Link from "next/link"
import { SignOutButton } from "../../common"
import { getServerSession } from "next-auth"


const Header = async () => {

    const session = await getServerSession()

    return (
        <header className="fixed w-full h-20 flex items-center bg-primary text-slate-50">
            <nav className="w-full flex item-center justify-between m-auto max-w-screen-xl text-br">
                <ul className="flex items-center gap-10">
                    <Link href="/">Logo</Link>
                </ul>
                <ul className="flex items-center gap-10">
                    <li className="hover:bg-laranja p-5 rounded-md cursor-pointer"><Link href="/">inicio</Link></li>
                    <li className="hover:bg-laranja p-5 rounded-md cursor-pointer"><Link href="/public">public</Link></li>
                    <li className="hover:bg-laranja p-5 rounded-md cursor-pointer"><Link href="/private">private</Link></li>
                    {session && <li className="hover:bg-laranja p-5 rounded-md cursor-pointer"><SignOutButton /></li>}
                </ul>
            </nav>
        </header>
    )
}

export{ Header }



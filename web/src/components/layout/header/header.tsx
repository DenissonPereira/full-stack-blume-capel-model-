import Link from "next/link"
import { SignOutButton } from "../../common"
import { getServerSession } from "next-auth"


const Header = async () => {

    const session = await getServerSession()

    return (
        <header className="fixed w-full h-20 flex items-center bg-primary text-slate-50">
            <nav className="w-full flex item-center justify-between m-auto max-w-screen-xl">
                <Link href="/">Logo</Link>
                <ul className="flex items-center gap-10">
                    <li><Link href="/">inicio</Link></li>
                    <li><Link href="/public">public</Link></li>
                    <li><Link href="/private">private</Link></li>
                    {session && <li><SignOutButton /></li>}
                </ul>
            </nav>
        </header>
    )
}

export{ Header }
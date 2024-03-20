'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErro] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password
            })

            console.log('[LOGIN_RESPONSE]: ', response)

            if (!response?.error) {
                router.refresh()
                router.push('/private')
            } else {
                setErro('Email ou senha inválidos')
            }

        } catch (error) {
            console.log('[LOGIN_ERROR]: ', error)
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form action="" className="p-10 border rounded-lg" onSubmit={handleLogin} style={{ backgroundImage: `url('/assets/images/background.png')`, backgroundSize: 'cover' }}>
                <h1 className="text-3xl font-bold rounded-lg w-96 text-branco">Login</h1>
                <p className="text-sm text-branco mb-10">Please log in to continue.</p>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 mb-6">
                        <h2 className="text-branco">E-mail</h2>
                        <input 
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=" @email.com"
                            className="border rounded p-3"
                        />
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                        <h2 className="text-branco">Password</h2>
                        <input 
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" password"
                            className="border rounded p-3"
                        />
                    </div>
                    <div className="flex justify-between text-branco">
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" required />
                            <p>I agree to terms</p>
                        </div>
                        <div>
                            <p>I forgot my password</p>
                        </div>
                    </div>
                    {error && <span className="text-red-400 text-sm block mt-2">{error}</span>}
                    <div className="flex justify-center pt-5">
                        <button
                            type="submit" className="bg-branco p-4 rounded-md text-preto font-bold hover:bg-branco_hover flex justify-center items-center gap-1"
                        >
                            Access account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export { LoginForm }
"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials', {email, password, callbackUrl: '/'});

        setLoginInProgress(false);
    }

    return (
        <section className="mt-8">
            <h1 className="mb-4 text-4xl font-semibold text-center text-primary">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    disabled={loginInProgress}
                />
                <input
                    name="password" 
                    type="password"
                    placeholder="Password"
                    value={password}
                    disabled={loginInProgress}
                />
                <button 
                    type="submit"
                    disabled={loginInProgress}
                >
                    Login
                </button>

                <div className="my-4 text-center text-gray-500">or Login with Providers</div>

                <div className="space-y-4">
                    <button type="button" className="flex justify-center gap-4" onClick={() => signIn('google', {callbackUrl: '/'})}>
                        <Image src={'/google.png'} alt="" width={24} height={24} />
                        Login with Google
                    </button>
                    <button className="flex justify-center gap-4">
                        <Image src={'/facebook.png'} alt="" width={28} height={28} />
                        Login with Facebook
                    </button>
                    <button className="flex justify-center gap-4">
                        <Image src={'/apple.png'} alt="" width={30} height={30} />
                        Login with Apple
                    </button>
                </div>

                <div className="pt-4 my-4 text-center text-gray-500 border-t">
                    Don't have an account?{' '}
                    <Link className="text-blue-800 underline" href={'/register'}>Register here</Link>
                </div>
            </form>
        </section>
    );
}
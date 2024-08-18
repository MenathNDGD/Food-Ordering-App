"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            setUserCreated(true);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl font-semibold mb-4">Register</h1>
            {userCreated && (
                <div className="my-4 text-center text-gray-800 font-semibold">
                    User Created Successfully.
                    <br />
                    Now You Can <Link className="text-blue-800 underline" href={'/login'}>Login &raquo;</Link>
                </div>
            )}
            {error && (
                <div className="my-4 text-center text-gray-800 font-semibold">
                    Error Occurred!
                    <br />
                    Please Try Again Later.
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    disabled={creatingUser}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    disabled={creatingUser}
                />
                <button 
                    type="submit"
                    disabled={creatingUser}
                >
                    Register
                </button>

                <div className="my-4 text-center text-gray-500">or Login with Providers</div>

                <div className="space-y-4">
                    <button className="flex gap-4 justify-center" onClick={() => signIn('google', {callbackUrl: '/'})}>
                        <Image src={'/google.png'} alt="" width={24} height={24} />
                        Login with Google
                    </button>
                    <button className="flex gap-4 justify-center">
                        <Image src={'/facebook.png'} alt="" width={28} height={28} />
                        Login with Facebook
                    </button>
                    <button className="flex gap-4 justify-center">
                        <Image src={'/apple.png'} alt="" width={30} height={30} />
                        Login with Apple
                    </button>
                </div>

                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Already have an account?{' '}
                    <Link className="underline text-blue-800" href={'/login'}>Login here</Link>
                </div>
            </form>
        </section>
    );
}
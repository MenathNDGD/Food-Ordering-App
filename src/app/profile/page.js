"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState('');
    const [saved, setSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const {status} = session;

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
        }
    }, [session, status]);

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: userName}),
        });
        setIsSaving(false);
        
        if (response.ok) {
            setSaved(true);
        }
    }

    async function handleFileChange(ev) {
        const files = ev.target.files;
        if (files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);
            await fetch('/api/upload', {
                method: 'POST',
                // headers: {'Content-Type': 'multipart/form-data'},
                //INFO: No need of the above commented line.
                body: null,
            })  
        }
    }

    if (status === 'loading') {
        return 'Loading...'
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    const userImage = session.data.user.image;

    return (
        <section className="mt-8">
            <h1 className="mb-4 text-4xl font-semibold text-center text-primary">Profile</h1>
            <div className="max-w-md mx-auto">
                {saved && (
                    <h2 className="p-4 text-center bg-green-100 border border-green-300 rounded-lg">Profile Saved!</h2>
                )}
                {isSaving && (
                    <h2 className="p-4 text-center bg-blue-100 border border-blue-300 rounded-lg">Saving....</h2>
                )}
                <div className="flex items-center gap-4">
                    <div>
                        <div className="relative p-2 bg-gray-300 rounded-lg">
                            <Image 
                                className="w-full h-full mb-2 rounded-lg" 
                                src={userImage}
                                alt={'avatar'}
                                width={250}
                                height={250}
                            />
                            <label>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                                <span className="block p-2 text-center text-white bg-gray-700 border border-gray-300 rounded-lg cursor-pointer">Edit</span>
                            </label>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input 
                            type="text" 
                            placeholder="First & Last Name" 
                            value={userName} 
                            onChange={ev => setUserName(ev.target.value)}
                        />
                        <input type="email" value={'session.data.user.email'} disabled={true} />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
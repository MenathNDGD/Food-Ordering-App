"use client";

import PlusCircle from "@/components/icons/PlusCircle";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItemsPage() {
    const [menuItems, setMenuItems] = useState([]);
    const {loading, data} = useProfile();
    
    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setMenuItems(menuItems);
            });
        });
    }, []);
    
    if (loading) {
        return 'Loadin User Info...';
    }
    if (!data.admin) {
        return 'Not an Admin.';
    }

    return (
        <section className="max-w-2xl mx-auto mt-8">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link
                    className="button"
                    href={'/menu-items/new'}
                >
                    <span>Add New Menu Item</span>
                    <PlusCircle />
                </Link>
            </div>
            <div>
                <h2 className="mt-8 text-sm text-gray-500">Edit Menu Item</h2>
                <div className="grid grid-cols-3 gap-2">
                    {menuItems?.length > 0 && menuItems.map(item => (
                        <Link href={'/menu-items/edit/' + item._id} className="p-4 bg-gray-200 rounded-lg">
                            <div className="relative">
                                <Image src={item.image} className="rounded-md" alt={''} width={200} height={200} />
                            </div>
                            <div className="items-center mt-2">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
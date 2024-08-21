"use client";

import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";

export default function EditUserPage() {
    const {loading, data} = useProfile();
    
    if (loading) {
        return 'Loading User Info...';
    }
    if (!data.admin) {
        return 'Not an Admin';
    }
    
    return (
        <section className="max-w-2xl mx-auto mt-8">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                User Info Form
            </div>
        </section>
    );
}
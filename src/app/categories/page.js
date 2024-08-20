"use client";

import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesPage() {
    
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const {loading: profileLoading, data: profileData} = useProfile();
    const [editedCategory, setEditedCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    function fetchCategories() {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    }

    async function handleCategorySubmit(ev) {
        ev.preventDefault();
        const creationPromise = new Promise(async (resolve, reject) => {
            const data = {name:categoryName};
            if (editedCategory) {
                data._id = editedCategory._id;
            }
            const response = await fetch('/api/categories', {
                method: editedCategory ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            setCategoryName('');
            fetchCategories();
            setEditedCategory(null);
            if (response.ok)
                resolve();
            else
                reject();
        });
        await toast.promise(creationPromise, {
            loading: editedCategory ? 'Updating Category Name...' : 'Creating New Category...',
            success: editedCategory ? 'Category Name Updated!' : 'New Category Created!',
            error: 'Category Creating Failed!',
        });
    }
    
    if (profileLoading) {
        return 'Loading User Info...';
    }

    if (!profileData.admin) {
        return 'Not an Admin';
    }
   
    return (
        <section className="max-w-md mx-auto mt-8">
            <UserTabs isAdmin={true} />
            <form className="mt-8" onSubmit={handleCategorySubmit}>
                <div className="flex items-end gap-2">
                    <div className="items-center grow">
                        <label>
                            {editedCategory ? 'Update Category Name' : 'New Category Name'}
                            {editedCategory && (
                                <>: <b>{editedCategory.name}</b></>
                            )}
                        </label>
                        <input 
                            type="text"
                            value={categoryName}
                            onChange={ev => setCategoryName(ev.target.value)}
                        />
                    </div>
                    <div className="pb-4">
                        <button
                            className="border border-primary" 
                            type="submit"
                        >
                            {editedCategory ? 'Update' : 'Create'}
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <h2 className="mt-8 text-sm text-gray-500">Edit Category</h2>
                {categories?.length > 0 && categories.map(c => (
                    <button
                        onClick={() => {
                            setEditedCategory(c);
                            setCategoryName(c.name);
                        }} 
                        className="flex gap-1 p-2 px-4 mb-1 cursor-pointer rounded-xl"
                    >
                        <span>{c.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
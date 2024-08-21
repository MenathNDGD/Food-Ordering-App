"use client";

import DeleteButton from "@/components/DeleteButton";
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

    async function handleDeleteClick(_id) {
        const promise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/categories?_id' + _id, {
                method: 'DELETE',
            });
            if (response.ok) {
                resolve();
            } else {
                reject();
            }
        });
        
        await toast.promise(promise, {
            loading: 'Category Deleting...',
            success: 'Category Deleted!',
            error: 'Deleting Failed!',
        });

        fetchCategories();
    }
    
    if (profileLoading) {
        return 'Loading User Info...';
    }

    if (!profileData.admin) {
        return 'Not an Admin';
    }
   
    return (
        <section className="max-w-2xl mx-auto mt-8">
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
                    <div className="flex gap-2 pb-4">
                        <button
                            className="border border-primary" 
                            type="submit"
                        >
                            {editedCategory ? 'Update' : 'Create'}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setEditedCategory(null);
                                setCategoryName('');
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <h2 className="mt-8 text-sm text-gray-500">Existing Categories</h2>
                {categories?.length > 0 && categories.map(c => (
                    <div 
                        className="flex items-center gap-1 p-2 px-4 mb-1 bg-gray-100 rounded-xl"
                    >
                        <div className="grow">
                            {c.name}
                        </div>
                        <div className="flex gap-2">
                            <button 
                                type="button"
                                onClick={() => {
                                    setEditedCategory(c);
                                    setCategoryName(c.name);
                                }}
                            >
                                Edit
                            </button>
                            <DeleteButton label="Delete" onDelete={() => handleDeleteClick(c._id)} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
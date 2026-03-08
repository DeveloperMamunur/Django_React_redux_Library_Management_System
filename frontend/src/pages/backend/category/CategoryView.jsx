import { useState } from "react";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../../services/categoryApi";
import EditCategoryModal from "./EditCategoryModal";
import CreateCategoryModal from "./CreateCategoryModal";

export default function CategoryView() {
    const { data, isLoading, isError } = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [openModal, setOpenModal] = useState(false);
    const categories = data?.results ?? [];
    const [selectedCategory, setSelectedCategory] = useState(null);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading publishers</p>;

    const handleModal = () => {
        setOpenModal(true);
    }

    const handleDelete = async (id) => {
        await deleteCategory(id).unwrap();
    }

    const handleEdit = (category) => {
        setOpenModal(true);
        setSelectedCategory(category);
        console.log(category);
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    Publisher / List
                </div>
                <div>
                    {/* <Link to="/branch/create" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Create</Link> */}
                    <button onClick={handleModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Create Publisher</button>
                </div>
            </div>
            <div className="mt-6">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr className="text-slate-500 border-b border-slate-300 bg-slate-200">
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Category Name</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Description</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length === 0 && <tr className="text-center"><td colSpan={3}>No categories found</td></tr>}
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td className="p-4 border-b border-blue-gray-50">{category.name}</td>
                                <td className="p-4 border-b border-blue-gray-50">{category.description}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <button onClick={() => handleEdit(category)}className="text-blue-500 hover:text-blue-600 me-3">Edit</button>
                                    <button onClick={() => handleDelete(category.id)} className="text-red-500 hover:text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CreateCategoryModal
                openModal={openModal} 
                setOpenModal={setOpenModal} 
            />

            <EditCategoryModal
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                selectedCategory={selectedCategory}
            />
        </div>
    )
}
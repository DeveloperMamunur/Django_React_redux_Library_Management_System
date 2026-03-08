import { useState } from "react";
import { useDeleteItemMutation, useGetItemsQuery } from "../../../services/itemApi";
import CreateItemModal from "./CreateItemModal";
import EditItemModal from "./EditItemModal";
import ShowItemModal from "./ShowItemModal";

export default function ItemView() {
    const { data, isLoading, isError } = useGetItemsQuery();
    const [deleteItem] = useDeleteItemMutation();
    const [openModal, setOpenModal] = useState(false);
    const items = data?.results ?? [];
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalType, setModalType] = useState(null);


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading publishers</p>;

    const handleModal = () => {
        setOpenModal(true);
        setModalType('create');
    }

    const handleDelete = async (id) => {
        await deleteItem(id).unwrap();
    }

    const handleEdit = (item) => {
        setOpenModal(true);
        setSelectedItem(item);
        setModalType('edit');
        console.log(item);
    }

    const handleView = (item) => {
        setOpenModal(true);
        setSelectedItem(item);
        setModalType('show');
        console.log(item);
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    Publisher / List
                </div>
                <div>
                    <button onClick={handleModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Create Publisher</button>
                </div>
            </div>
            <div className="mt-6">
                <table className="w-full text-left min-w-full">
                    <thead>
                        <tr className="text-slate-500 border-b border-slate-300 bg-slate-200">
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Title</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Cover Image</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Subtitle</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Category</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Author</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ISBN</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">issn</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 && <tr className="text-center"><td colSpan={3}>No data found</td></tr>}
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td className="p-4 border-b border-blue-gray-50">{item.title}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <img src={item.cover_image} alt={item.title} className="w-16 object-cover" />
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">{item.subtitle}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    {item.categories?.map((c) => c.name).join(", ")}
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    {item.authors?.map((a) => a.name).join(", ")}
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">{item.isbn}</td>
                                <td className="p-4 border-b border-blue-gray-50">{item.issn}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <button onClick={() => handleView(item)}className="text-blue-500 hover:text-blue-600 me-3">View</button>
                                    <button onClick={() => handleEdit(item)}className="text-blue-500 hover:text-blue-600 me-3">Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {modalType === "show" && (
                <ShowItemModal
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                    selectedItem={selectedItem}
                />
            )}

            {modalType === "create" && (
                <CreateItemModal
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                />
            )}

            {modalType === "edit" && (
                <EditItemModal
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                    selectedItem={selectedItem}
                />
            )}
        </div>
    )
}
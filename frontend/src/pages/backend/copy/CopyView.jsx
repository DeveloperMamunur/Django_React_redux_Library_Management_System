import { useState } from "react";
import { useDeleteCopyMutation, useGetCopiesQuery } from "../../../services/copyApi";
import ShowCopyModal from "./ShowCopyModal";
import CreateCopyModal from "./CreateCopyModal";
import EditCopyModal from "./EditCopyModal";

export default function CopyView() {
    const { data, isLoading, isError } = useGetCopiesQuery();
    const [deleteCopy] = useDeleteCopyMutation();
    const [openModal, setOpenModal] = useState(false);
    const copies = data?.results ?? [];
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalType, setModalType] = useState(null);


    const handleModal = () => {
        setOpenModal(true);
        setModalType('create');
    }

    const handleDelete = async (id) => {
        await deleteCopy(id).unwrap();
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

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading publishers</p>;
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
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">item</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">branch</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">location</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">status</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">condition</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">price</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {copies.length === 0 && <tr className="text-center"><td className="p-4 border-b border-blue-gray-50" colSpan="11">No data found</td></tr>}
                        {copies.map((item) => (
                            <tr key={item.id}>
                                <td className="p-4 border-b border-blue-gray-50">{item.item.title}</td>
                                <td className="p-4 border-b border-blue-gray-50">{item.branch.name}</td>
                                <td className="p-4 border-b border-blue-gray-50">{item.location}</td>
                                <td className="p-4 border-b border-blue-gray-50">{item.status}</td>
                                <td className="p-4 border-b border-blue-gray-50">{item.condition}</td>
                                <td className="p-4 border-b border-blue-gray-50">{item.price}</td>
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
                <ShowCopyModal
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                    selectedItem={selectedItem}
                />
            )}

            {modalType === "create" && (
                <CreateCopyModal
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                />
            )}

            {modalType === "edit" && (
                <EditCopyModal
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                    selectedItem={selectedItem}
                />
            )}
        </div>
    )
}
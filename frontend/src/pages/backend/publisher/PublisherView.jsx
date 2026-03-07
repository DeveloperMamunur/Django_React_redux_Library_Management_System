import { useState } from "react";
import { useDeletePublisherMutation, useGetPublishersQuery } from "../../../services/publisherApi";
import EditPublisherModal from "./EditPublisherModal";
import CreatePublisherModal from "./CreatePublisherModal";

export default function PublisherView() {
    const { data, isLoading, isError } = useGetPublishersQuery();
    const [deletePublisher] = useDeletePublisherMutation();
    const [openModal, setOpenModal] = useState(false);
    const publishers = data?.results ?? [];
    const [selectedPublisher, setSelectedPublisher] = useState(null);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading publishers</p>;

    const handleModal = () => {
        setOpenModal(true);
    }

    const handleDelete = async (id) => {
        await deletePublisher(id).unwrap();
    }

    const handleEdit = (publisher) => {
        setOpenModal(true);
        setSelectedPublisher(publisher);
        console.log(publisher);
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
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Publisher Name</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Address</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">website</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">email</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publishers.map((publisher) => (
                            <tr key={publisher.id}>
                                <td className="p-4 border-b border-blue-gray-50">{publisher.name}</td>
                                <td className="p-4 border-b border-blue-gray-50">{publisher.address}</td>
                                <td className="p-4 border-b border-blue-gray-50">{publisher.website}</td>
                                <td className="p-4 border-b border-blue-gray-50">{publisher.email}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <button onClick={() => handleEdit(publisher)}className="text-blue-500 hover:text-blue-600 me-3">Edit</button>
                                    <button onClick={() => handleDelete(publisher.id)} className="text-red-500 hover:text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CreatePublisherModal
                openModal={openModal} 
                setOpenModal={setOpenModal} 
            />

            <EditPublisherModal
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                selectedPublisher={selectedPublisher}
            />
        </div>
    )
}
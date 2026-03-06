
import { useState } from "react";
import { useDeleteAuthorMutation, useGetAuthorsQuery } from "../../../services/authorApi";
import CreateAuthorModal from "./CreateAuthorModal";
import EditAuthorModal from "./EditAuthorModal";

export default function AuthorView() {
    const { data, isLoading, isError } = useGetAuthorsQuery();
    const [deleteAuthor] = useDeleteAuthorMutation();
    const [openModal, setOpenModal] = useState(false);
    const authors = data?.results ?? [];
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading authors</p>;

    const handleModal = () => {
        setOpenModal(true);
    }

    const handleDelete = async (id) => {
        await deleteAuthor(id).unwrap(); 
    }

    const handleEdit = (author) => {
        setOpenModal(true);
        setSelectedAuthor(author);
        console.log(author);
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    Author / List
                </div>
                <div>
                    {/* <Link to="/branch/create" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Create</Link> */}
                    <button onClick={handleModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Create Author</button>
                </div>
            </div>
            <div className="mt-6">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr className="text-slate-500 border-b border-slate-300 bg-slate-200">
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Author Name</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">biography</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">birth_date</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">nationality</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author) => (
                            <tr key={author.id}>
                                <td className="p-4 border-b border-blue-gray-50">{author.name}</td>
                                <td className="p-4 border-b border-blue-gray-50">{author.biography}</td>
                                <td className="p-4 border-b border-blue-gray-50">{author.birth_date}</td>
                                <td className="p-4 border-b border-blue-gray-50">{author.nationality}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <button onClick={() => handleEdit(author)}className="text-blue-500 hover:text-blue-600 me-3">Edit</button>
                                    <button onClick={() => handleDelete(author.id)} className="text-red-500 hover:text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CreateAuthorModal
                openModal={openModal} 
                setOpenModal={setOpenModal} 
            />

            <EditAuthorModal
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                selectedAuthor={selectedAuthor}
            />
        </div>
    )
}
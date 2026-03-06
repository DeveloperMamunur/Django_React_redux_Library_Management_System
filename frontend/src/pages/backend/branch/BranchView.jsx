import { Link } from "react-router-dom";
import { useDeleteBranchMutation, useGetBranchesQuery } from "../../../services/branchApi";
import { useState } from "react";
import CreateBranchModal from "./CreateBranchModal";
import EditBranchModal from "./EditBranchModal";

export default function BranchView() {
    const { data, isLoading, isError } = useGetBranchesQuery();
    const [deleteBranch] = useDeleteBranchMutation();
    const [openModal, setOpenModal] = useState(false);
    const branches = data?.results ?? [];
    const [selectedBranch, setSelectedBranch] = useState(null);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading branches</p>;

    const handleModal = () => {
        setOpenModal(true);
    }

    const handleDelete = async (id) => {
        await deleteBranch(id).unwrap();
    }

    const handleEdit = (branch) => {
        setOpenModal(true);
        setSelectedBranch(branch);
        console.log(branch);
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    Branch / List
                </div>
                <div>
                    {/* <Link to="/branch/create" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Create</Link> */}
                    <button onClick={handleModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Create Branch</button>
                </div>
            </div>
            <div className="mt-6">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr className="text-slate-500 border-b border-slate-300 bg-slate-200">
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Branch Name</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">code</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">phone</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">email</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Address</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Status</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {branches.map((branch) => (
                            <tr key={branch.id}>
                                <td className="p-4 border-b border-blue-gray-50">{branch.name}</td>
                                <td className="p-4 border-b border-blue-gray-50">{branch.code}</td>
                                <td className="p-4 border-b border-blue-gray-50">{branch.phone}</td>
                                <td className="p-4 border-b border-blue-gray-50">{branch.email}</td>
                                <td className="p-4 border-b border-blue-gray-50">{branch.address}</td>
                                <td className="p-4 border-b border-blue-gray-50">{branch.is_active ? 'Active' : 'Inactive'}</td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <button onClick={() => handleEdit(branch)}className="text-blue-500 hover:text-blue-600 me-3">Edit</button>
                                    <button onClick={() => handleDelete(branch.id)} className="text-red-500 hover:text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CreateBranchModal 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
            />

            <EditBranchModal 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                selectedBranch={selectedBranch}
            />
        </div>
    )
}
import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useCreateBranchMutation } from "../../../services/branchApi";

export default function CreateBranchModal({ openModal, setOpenModal }) {
    const [createBranch] = useCreateBranchMutation();
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        phone: '',
        email: '',
        address: '',
        is_active: true
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createBranch(formData).unwrap();
        setOpenModal(false)
        setFormData({});
    };

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        id="name" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
                    <input 
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        id="code" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input 
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        id="phone" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        id="address" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select 
                        id="status"
                        name="is_active"
                        value={formData.is_active}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full">
                        <option value="true" >Active</option>
                        <option value="false">Inactive</option>
                    </select>
                </div>
                <div className="flex justify-end mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">Submit</button>
                    <button type="button" onClick={() => setOpenModal(false)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Close</button>
                </div>
            </form>
        </Modal>
    )
}
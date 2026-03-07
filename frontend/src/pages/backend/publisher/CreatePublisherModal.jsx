import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useCreatePublisherMutation } from "../../../services/publisherApi";

export default function CreatePublisherModal({ openModal, setOpenModal }) {
    const [createPublisher] = useCreatePublisherMutation();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        website: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createPublisher(formData).unwrap();
        setOpenModal(false)
        setFormData({});
    };

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Create Publisher">
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
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                    <input 
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        id="website" 
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
                <div className="flex justify-end mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">Submit</button>
                    <button type="button" onClick={() => setOpenModal(false)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Close</button>
                </div>
            </form>
        </Modal>
    )
}
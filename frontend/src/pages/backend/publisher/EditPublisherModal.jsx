import { useEffect, useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useUpdatePublisherMutation } from "../../../services/publisherApi";

export default function EditPublisherModal({ openModal, setOpenModal, selectedPublisher }) {
    const [updatePublisher] = useUpdatePublisherMutation();
    const initialState = {
        name: '',
        address: '',
        website: '',
        email: '',
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!openModal || !selectedPublisher) return;

        setFormData({
            name: selectedPublisher.name ?? '',
            address: selectedPublisher.address ?? '',
            website: selectedPublisher.website ?? '',
            email: selectedPublisher.email ?? '',
        });
    }, [openModal, selectedPublisher]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updatePublisher({ id: selectedPublisher.id, ...formData }).unwrap();
        setOpenModal(false)
        setFormData({});
    };

    if (!selectedPublisher) return null;

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Edit Branch">
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
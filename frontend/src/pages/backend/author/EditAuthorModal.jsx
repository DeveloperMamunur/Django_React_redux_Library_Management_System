import { useEffect, useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useUpdateAuthorMutation } from "../../../services/authorApi";

export default function EditAuthorModal({ openModal, setOpenModal, selectedAuthor }) {
    const [updateAuthor] = useUpdateAuthorMutation();
    const initialState = {
        name: '',
        biography: '',
        birth_date: '',
        nationality: '',
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!openModal || !selectedAuthor) return;

        setFormData({
            name: selectedAuthor.name ?? '',
            biography: selectedAuthor.biography ?? '',
            birth_date: selectedAuthor.birth_date ?? '',
            nationality: selectedAuthor.nationality ?? ''
        });
    }, [openModal, selectedAuthor]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateAuthor({ id: selectedAuthor.id, ...formData }).unwrap();
        setOpenModal(false)
        setFormData({});
    };

    if (!selectedAuthor) return null;

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Edit Author">
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
                    <label htmlFor="biography" className="block text-sm font-medium text-gray-700">Biography</label>
                    <input 
                        type="text"
                        name="biography"
                        value={formData.biography}
                        onChange={handleChange}
                        id="biography" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="birth_date" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input 
                        type="date"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        id="birth_date" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                    <input 
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        id="nationality" 
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
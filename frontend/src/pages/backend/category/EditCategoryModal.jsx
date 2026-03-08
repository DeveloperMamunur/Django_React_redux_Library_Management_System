import { useEffect, useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useUpdateCategoryMutation } from "../../../services/categoryApi";

export default function EditCategoryModal({ openModal, setOpenModal, selectedCategory }) {
    const [updateCategory] = useUpdateCategoryMutation();
    const initialState = {
        name: '',
        description: ''
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!openModal || !selectedCategory) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData({
            name: selectedCategory.name ?? '',
            description: selectedCategory.description ?? ''
        });
    }, [openModal, selectedCategory]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateCategory({ id: selectedCategory.id, ...formData }).unwrap();
        setOpenModal(false)
        setFormData({});
    };

    if (!selectedCategory) return null;

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Edit Category">
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
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input 
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        id="description" 
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
import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useCreateCopyMutation } from "../../../services/copyApi";
import { useGetBranchesQuery } from "../../../services/branchApi";
import { useGetItemsQuery } from "../../../services/itemApi";

export default function CreateCopyModal({ openModal, setOpenModal }) {
    const [createCopy] = useCreateCopyMutation();
    const { data: items } = useGetItemsQuery();
    const itemsOptions = items?.results ?? [];

    const { data: branches} = useGetBranchesQuery();
    const branchesOptions = branches?.results ?? [];

    const initialState = {
        item_id: '',
        barcode: '',
        rfid_tag: '',
        branch_id: '',
        location: '',
        status: '',
        condition: '',
        acquisition_date: '',
        price: '',
        notes: ''
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createCopy(formData).unwrap();

        setOpenModal(false);
        setFormData(initialState);
    };

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Create Copy" size='2xl'>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="item" className="block text-sm font-medium text-gray-700">Item</label>
                        <select
                            name="item_id"
                            value={formData.item_id}
                            onChange={handleChange}
                            id="item" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="">Select an item</option>
                            {itemsOptions.map((item) => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">Barcode</label>
                        <input 
                            type="text"
                            name="barcode"
                            value={formData.barcode}
                            onChange={handleChange}
                            id="barcode" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="rfid_tag" className="block text-sm font-medium text-gray-700">RFID Tag</label>
                        <input 
                            type="text"
                            name="rfid_tag"
                            value={formData.rfid_tag}
                            onChange={handleChange}
                            id="rfid_tag" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
                        <select
                            name="branch_id"
                            value={formData.branch_id}
                            onChange={handleChange}
                            id="branch" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="">Select a branch</option>
                            {branchesOptions.map((branch) => (
                                <option key={branch.id} value={branch.id}>{branch.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input 
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        id="location" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            id="status" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="">Select a status</option>
                            <option value="available">Available</option>
                            <option value="checked_out">Checked Out</option>
                            <option value="reserved">Reserved</option>
                            <option value="damaged">Damaged</option>
                            <option value="lost">Lost</option>
                            <option value="in_repair">In Repair</option>
                            <option value="withdrawn">Withdrawn</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condition</label>
                        <input 
                            type="text"
                            name="condition"
                            value={formData.condition}
                            onChange={handleChange}
                            id="condition" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="acquisition_date" className="block text-sm font-medium text-gray-700">Acquisition Date</label>
                        <input 
                            type="date"
                            name="acquisition_date"
                            value={formData.acquisition_date}
                            onChange={handleChange}
                            id="acquisition_date" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input 
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            id="price" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                    <input 
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        id="notes" 
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
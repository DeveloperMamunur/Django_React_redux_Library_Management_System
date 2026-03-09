import Modal from "../../../components/ui/Modal";

export default function ShowCopyModal({ openModal, setOpenModal, selectedItem }) {
    const copy = selectedItem;
    
    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Show Item" size='2xl'>
            <table className="w-full text-left min-w-full">
                <thead>
                    <tr className="text-slate-500 border-b border-slate-300 bg-slate-200">
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Name</th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">:</th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Description</th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Item</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.item.title}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Barcode</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.barcode}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Status</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.status}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Condition</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.condition}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Branch</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.branch.name}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">location</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.location}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Acquisition Date</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.acquisition_date}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Price</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.price}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Notes</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{copy.notes}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    )
}
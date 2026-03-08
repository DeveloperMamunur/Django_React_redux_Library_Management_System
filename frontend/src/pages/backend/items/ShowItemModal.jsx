import Modal from "../../../components/ui/Modal";

export default function ShowItemModal({ openModal, setOpenModal, selectedItem }) {
    const item = selectedItem;
    
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
                        <td className="p-4 border-b border-blue-gray-50">Title</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.title}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Subtitle</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.subtitle}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Description</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.description}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Cover Image</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <img src={item.cover_image} alt={item.title} className="w-16 object-cover" />
                        </td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Categories</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">
                            {item.categories?.map((c) => c.name).join(", ")}
                        </td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Item Types</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">
                            {item.item_type}
                        </td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Authors</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">
                            {item.authors?.map((a) => a.name).join(", ")}
                        </td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">ISBN</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.isbn}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">ISSN</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.issn}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Publisher</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.publisher?.name}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Publication Year</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.publication_year}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Edition</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.edition}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Classification_system</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.classification_system}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Classification Number</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.classification_number}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Pages</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.pages}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Language</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.language}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Digital File</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <img src={item.digital_file} alt={item.title} className="w-16 object-cover" />
                        </td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">File Size</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.file_size_mb}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">Keywords</td>
                        <td className="p-4 border-b border-blue-gray-50">:</td>
                        <td className="p-4 border-b border-blue-gray-50">{item.keywords}</td>
                        <td className="p-4 border-b border-blue-gray-50"></td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    )
}
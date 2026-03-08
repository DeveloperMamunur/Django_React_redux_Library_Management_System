import { useEffect, useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useUpdateItemMutation } from "../../../services/itemApi";
import { useGetCategoriesQuery } from "../../../services/categoryApi";
import { useGetPublishersQuery } from "../../../services/publisherApi";
import { useGetAuthorsQuery } from "../../../services/authorApi";

export default function EditItemModal({ openModal, setOpenModal, selectedItem }) {
    const [updateItem] = useUpdateItemMutation();
    const { data: authors } = useGetAuthorsQuery();
    const { data: categories } = useGetCategoriesQuery();
    const { data: publishers } = useGetPublishersQuery();

    const authorOptions = authors?.results ?? [];
    const categoryOptions = categories?.results ?? [];
    const publisherOptions = publishers?.results ?? [];




    const initialState = {
        title: '',
        subtitle: '',
        item_type: 'book',
        isbn: '',
        issn: '',
        author_ids: [],
        publisher_id: '',
        publication_year: '',
        edition: '',
        category_ids: [],
        classification_system: 'dewey',
        classification_number: '',
        pages: '',
        language: 'English',
        cover_image: '',
        digital_file: '',
        file_size_mb: '',
        description: '',
        keywords: []
    }

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (!openModal || !selectedItem) return;

        setFormData({
            title: selectedItem.title ?? '',
            subtitle: selectedItem.subtitle ?? '',
            item_type: selectedItem.item_type ?? 'book',
            isbn: selectedItem.isbn ?? '',
            issn: selectedItem.issn ?? '',

            author_ids: selectedItem.authors?.map((a) => a.id) ?? [],
            category_ids: selectedItem.categories?.map((c) => c.id) ?? [],
            publisher_id: selectedItem.publisher?.id ?? '',

            publication_year: selectedItem.publication_year ?? '',
            edition: selectedItem.edition ?? '',
            classification_system: selectedItem.classification_system ?? 'dewey',
            classification_number: selectedItem.classification_number ?? '',
            pages: selectedItem.pages ?? '',
            language: selectedItem.language ?? 'English',
            file_size_mb: selectedItem.file_size_mb ?? '',
            description: selectedItem.description ?? '',
            keywords: selectedItem.keywords ?? []
        });
    }, [openModal, selectedItem]);

    const handleChange = (e) => {
        const { name, value, multiple, options, files, type } = e.target;

        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        }
        else if (multiple) {
            const values = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);

            setFormData({
                ...formData,
                [name]: values,
            });
        }
        else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData();

        Object.keys(formData).forEach((key) => {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((v) => form.append(key, v));
            } else {
                form.append(key, formData[key]);
            }
        });

        await updateItem({
            id: selectedItem.id,
            data: form
        }).unwrap();

        setFormData(initialState);
        setOpenModal(false);
    };

    if (!selectedItem) return null;

    return (
        <Modal openModal={openModal} setOpenModal={setOpenModal} title="Edit Item" size='2xl'>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        id="title" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle</label>
                    <input 
                        type="text"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        id="subtitle" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Categories</label>
                        <select
                            name="category_ids"
                            value={formData.category_ids}
                            onChange={handleChange}
                            id="categories" 
                            className="mt-1 p-2 border rounded w-full"
                            multiple
                        >
                            <option value="">Select categories</option>
                            {categoryOptions.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="authors" className="block text-sm font-medium text-gray-700">Authors</label>
                        <select
                            name="author_ids"
                            value={formData.author_ids}
                            onChange={handleChange}
                            id="authors" 
                            className="mt-1 p-2 border rounded w-full"
                            multiple
                        >
                            <option value="">Select authors</option>
                            {authorOptions.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">ISBN</label>
                        <input 
                            type="text"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleChange}
                            id="isbn" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="issn" className="block text-sm font-medium text-gray-700">ISSN</label>
                        <input 
                            type="text"
                            name="issn"
                            value={formData.issn}
                            onChange={handleChange}
                            id="issn" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="mb-4 w-full">
                        <label htmlFor="item_type" className="block text-sm font-medium text-gray-700">Item Type</label>
                        <select
                            name="item_type"
                            value={formData.item_type}
                            onChange={handleChange}
                            id="item_type" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="book">Book</option>
                            <option value="ebook">E-Book</option>
                            <option value="journal">Journal</option>
                            <option value="magazine">Magazine</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">Publisher</label>
                        <select
                            name="publisher_id"
                            value={formData.publisher_id}
                            onChange={handleChange}
                            id="publisher" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="">Select a publisher</option>
                            {publisherOptions.map((publisher) => (
                                <option key={publisher.id} value={publisher.id}>
                                    {publisher.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="publication_year" className="block text-sm font-medium text-gray-700">Publication Year</label>
                        <input 
                            type="text"
                            name="publication_year"
                            value={formData.publication_year}
                            onChange={handleChange}
                            id="publication_year" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="edition" className="block text-sm font-medium text-gray-700">Edition</label>
                        <input 
                            type="text"
                            name="edition"
                            value={formData.edition}
                            onChange={handleChange}
                            id="edition" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="classification_system" className="block text-sm font-medium text-gray-700">Classification System</label>
                        <select
                            name="classification_system"
                            value={formData.classification_system}
                            onChange={handleChange}
                            id="classification_system" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="dewey">Dewey</option>
                            <option value="oclc">OCLC</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="classification_number" className="block text-sm font-medium text-gray-700">Classification Number</label>
                        <input 
                            type="text"
                            name="classification_number"
                            value={formData.classification_number}
                            onChange={handleChange}
                            id="classification_number" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="pages" className="block text-sm font-medium text-gray-700">Pages</label>
                        <input 
                            type="text"
                            name="pages"
                            value={formData.pages}
                            onChange={handleChange}
                            id="pages" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                        <select
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            id="language" 
                            className="mt-1 p-2 border rounded w-full"
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Russian">Russian</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Korean">Korean</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4 w-full">
                        <label htmlFor="digital_file" className="block text-sm font-medium text-gray-700">Digital File</label>
                        <input 
                            type="file"
                            name="digital_file"
                            onChange={handleChange}
                            id="digital_file" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="file_size_mb" className="block text-sm font-medium text-gray-700">File Size (MB)</label>
                        <input 
                            type="text"
                            name="file_size_mb"
                            value={formData.file_size_mb}
                            onChange={handleChange}
                            id="file_size_mb" 
                            className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        id="description" 
                        rows="4" 
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords</label>
                    <input 
                        type="text"
                        name="keywords"
                        value={formData.keywords}
                        onChange={handleChange}
                        id="keywords" 
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cover_image" className="block text-sm font-medium text-gray-700">Cover Image</label>
                    <input 
                        type="file"
                        name="cover_image"
                        onChange={handleChange}
                        id="cover_image" 
                        className="mt-1 p-2 border rounded w-full" />
                </div>
                {selectedItem.cover_image && (
                    <img
                        src={selectedItem.cover_image}
                        className="w-20 mb-2 object-cover"
                    />
                )}
                <div className="flex justify-end mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">Submit</button>
                    <button type="button" onClick={() => setOpenModal(false)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Close</button>
                </div>
            </form>
        </Modal>
    )
}
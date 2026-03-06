import { X } from "lucide-react";

export default function Modal({ openModal, setOpenModal, children }) {
    return (
        <div>
            {openModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow max-w-lg w-full mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold mb-2">Create Branch</h2>
                        <button onClick={() => setOpenModal(false)} className="text-gray-500 hover:text-gray-600">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
            }
        </div>
    );
}
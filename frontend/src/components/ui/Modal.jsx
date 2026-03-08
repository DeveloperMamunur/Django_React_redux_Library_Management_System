import { X } from "lucide-react";

export default function Modal({ openModal, setOpenModal, title, size = 'lg', children }) {
    const sizes = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl"
    };
    size = sizes[size];
    return (
        <div>
            {openModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className={`bg-white rounded shadow w-full ${size} max-h-[90vh] flex flex-col p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold mb-2">{title}</h2>
                        <button onClick={() => setOpenModal(false)} className="text-gray-500 hover:text-gray-600">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
            }
        </div>
    );
}
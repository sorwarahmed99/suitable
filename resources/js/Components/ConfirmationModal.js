import React from 'react';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded shadow-md">
                <p className="mb-4">Are you sure you want to delete this item?</p>
                <div className="flex justify-end">
                    <button
                        className="mr-2 px-4 py-2 text-gray-600 border border-gray-400 rounded hover:bg-gray-100"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;

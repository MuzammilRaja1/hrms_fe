import React from "react";

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null; // Agar modal open nahi hai, toh kuch render na kare

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md mr-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// components/Modal.tsx
import React, { useEffect, useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg w-1/3 p-4 transform transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-0"
        }`}
      >
        <div className="w-full border-b ">
          <div className="text-black font-inter py-2">
            <h1 className="text-3xl">Create Collection</h1>
            <p className="text-md text-gray-500">
              Organize your threads or share it to others
            </p>
          </div>
          
        </div>

        <div className="py-2 space-y-1">
          <h1 className="text-black font-semibold text-md">Title</h1>
          <input
            type="text"
            placeholder="Holy Cross of Davao College Courses"
            className="w-full text-black py-1 px-4 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition duration-200"
          />
        </div>
        <div className="py-2 space-y-1">
          <h1 className="text-black font-semibold text-md">Description<span className="font-light text-sm"> (Optional)</span></h1>
          <textarea
            placeholder="Holy Cross of Davao College Courses"
            className="w-full h-28 text-black py-1.5 px-2 border-2 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition duration-200"
          />
        </div>


        <div className="flex justify-end space-x-1">
          <button
            className="bg-transparent border border-red-800 text-red-800 py-2 px-4 rounded-md transition duration-200 hover:border-red-900"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-gray-900"
            onClick={onClose}
          >
            Create
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .opacity-100 {
          animation: fadeIn 0.2s forwards;
        }

        .opacity-0 {
          animation: fadeOut 0.2s forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;

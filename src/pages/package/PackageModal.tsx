import React, { ReactNode } from 'react'

interface Props{
    isOpen :boolean;
    onClose:()=>void;
    children : ReactNode;
    // activities :  ActivityFormState[]
}

const PackageModal :React.FC <Props> = ({ isOpen, onClose,children}) => {



if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg relative mx-auto w-5/6  h-auto max-h-[90vh] overflow-auto">
        <div className="flex items-center   justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Create/Update Package</h1>
          <button
            onClick={onClose}
            className=" text-gray-600 hover:text-gray-900"
          >
            <i className="text-red-600 font-bold text-3xl bx bxs-x-circle"></i>
          </button>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}

export default PackageModal

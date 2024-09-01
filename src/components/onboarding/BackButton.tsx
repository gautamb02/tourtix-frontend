import React from 'react'


interface Props{
    onBack :()=>void;
}
const BackButton :React.FC<Props>= ({onBack}) => {
  return (
    <div>
       <button
            onClick={onBack}
            className="bg-gray-100 hover:bg-gray-500 hover:text-white border text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
    </div>
  )
}

export default BackButton;

import React from 'react'


interface Props{
    onBack :()=>void;
}
const BackButton :React.FC<Props>= ({onBack}) => {
  return (
    <div>
       <button
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
    </div>
  )
}

export default BackButton;

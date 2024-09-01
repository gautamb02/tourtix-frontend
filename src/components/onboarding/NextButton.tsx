import React from 'react'

interface Props{
    isButtonDisabled : boolean;
    onNext :() =>void;
}

const NextButton :React.FC<Props>  = ({isButtonDisabled,onNext}) => {
  return (
    <div>
      <button
              disabled={isButtonDisabled}
              onClick={onNext}
              className={`font-bold py-2 px-4 rounded text-white ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-blue-700'}`}
              >
              Next
            </button>
    </div>
  )
}

export default NextButton;

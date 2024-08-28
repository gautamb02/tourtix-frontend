import React from 'react'

interface Props{
    isButtonDisabled : boolean;
    onNext :() =>void;
}

const SubmitButton :React.FC<Props>  = ({isButtonDisabled,onNext}) => {
  return (
    <div>
      <button
              disabled={isButtonDisabled}
              onClick={onNext}
              className={`font-bold py-2 px-4 rounded text-white ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`}
              >
              Complete
            </button>
    </div>
  )
}

export default SubmitButton;

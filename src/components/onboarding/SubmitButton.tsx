import React from 'react'

interface Props{
    isButtonDisabled : boolean;
    onSubmit :() =>void;
}

const SubmitButton :React.FC<Props>  = ({isButtonDisabled,onSubmit}) => {
  return (
    <div>
      <button type='submit'
              disabled={isButtonDisabled}
              onClick={onSubmit}
              className={`font-bold py-2 px-4 rounded text-white ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`}
              >
              Complete
            </button>
    </div>
  )
}

export default SubmitButton;

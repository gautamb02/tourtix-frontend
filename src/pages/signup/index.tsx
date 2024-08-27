import SignUpForm from "./signupform";

function SignUpIndex(): JSX.Element {    
   

    return (
        
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-90">
                <div className="bg-white rounded w-25">
                    <SignUpForm/>
                   
                </div>
            </div>
        
    );
}

export default SignUpIndex;

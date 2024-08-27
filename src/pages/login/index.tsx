import LoginForm from "./loginform";

function LogIn(): JSX.Element {    
   

    return (
        
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-90">
                <div className="bg-white rounded w-25">
                    <LoginForm/>
                   
                </div>
            </div>
        
    );
}

export default LogIn;

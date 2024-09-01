import SignUpForm from "./signupform";

function SignUpIndex(): JSX.Element {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-white rounded-lg shadow-md p-8 w-full ">
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUpIndex;
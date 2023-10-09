import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Sign In Successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }

    return (
        <div className="flex flex-col md:flex-row lg:flex-col ">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn mr-1 btn-outline mb-2 hover:bg-[#fcb41e] hover:text-primary-bg hover:border-none hover:font-medium">
                <FcGoogle className="w-6 h-6 mr-2" /> <span className="md:hidden lg:block">Login with Google</span>
            </button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline hover:bg-[#fcb41e] hover:text-primary-bg hover:border-none hover:font-medium">
                <AiOutlineGithub className="w-6 h-6 mr-2" /> <span className="md:hidden lg:block">Login with Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;
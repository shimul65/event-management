import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Login = () => {

    const { signIn } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        //create new user
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Log In Successfully');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })

    }

    return (
        <div className="card-body mx-auto my-20 rounded-2xl shadow-2xl md:w-3/4 lg:w-1/2 border py-8 px-10 md:py-16 md:px-24">
            <form onSubmit={handleLogin}>
                <h2 className="text-3xl font-semibold text-center">Login your account</h2>
                <hr className="my-12" />
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email address " className="input input-bordered" name="email" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="input input-bordered" name="password" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button
                        className="btn rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-lg font-medium md:font-bold text-[#FFF] md:h-16  border-none">LOG IN</button>
                </div>
            </form>
            <p className="mt-8 text-center">Don’t Have An Account ? <span className="text-red-600 underline font-medium"><Link to='/register'>Register</Link></span></p>
            <div className="divider">continue with</div>
            <div className="md:w-1/2 w-full">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
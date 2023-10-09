import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Register = () => {

    const navigate = useNavigate();

    const { createUser, handleUpdateProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');

        //create new user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // update profile
                handleUpdateProfile(name, photoURL)
                    .then(() => {
                        navigate('/');
                        toast.success('User Sign Up Successfully')
                    }).catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })

    }

    return (
        <div className="container mx-auto" >
            <div className="card-body mx-auto md:w-3/4 lg:w-1/2 border py-8 px-10 md:py-16 my-20 rounded-2xl shadow-2xl md:px-24">
                <form onSubmit={handleRegister}>
                    <h2 className="text-3xl font-semibold text-center">Register your account</h2>
                    <hr className="my-12" />
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" className="input input-bordered" name="photoURL" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered" name="password" required />
                    </div>
                    <div className='mt-4 flex gap-2 items-center'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept Our Terms and Conditions</label>
                    </div>
                    <div className="form-control mt-6">
                        <button
                            className="btn rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-lg font-medium md:bold text-[#FFF] md:h-16  border-none">Register</button>
                    </div>
                </form>
                <p className="mt-8 text-center">Already Have An Account ? <span className="text-blue-600 font-medium underline"><Link to='/login'>Login</Link></span></p>
                <div className="divider">continue with</div>
                <div className="md:w-1/2 w-full">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
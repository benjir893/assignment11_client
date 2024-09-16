import { Link, useLocation, useNavigate } from "react-router-dom";
import Navlogo from "../../navbar/Navlogo";
import { HelmetProvider } from "react-helmet-async";
import { useContext, useState } from "react";
import { Authcontext } from "../../../services/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import axios from "axios";


const Login = () => {
    const { user, loginUser, googleLogin, githubLogin } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showpass, setShowpass] = useState(false)

    const handleLoginWithEmailandPassword = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { email, password }
        // console.log({ user })

        loginUser(email, password)
            .then(useCredential => {
                const loggeduser = useCredential.user;
                console.log(loggeduser)
                const user = { email }

                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/');
                        }
                    })
            })
            .catch(err => {
                console.error(err)
                Swal.fire("please re-check your credentials")
                return;
            })
    }

    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin()
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => {
                console.error(err)
            })

    }
    const handleGithubLogin = e => {
        e.preventDefault();
        githubLogin()
            .then(userCredential => {
                console.log(userCredential.user);
                navigate(location?.state ? location?.state : '/');
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <HelmetProvider>
            <title>ProdX/login</title>
            <div className="hero bg-lime-50 min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card bg-lime-400 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="ml-24 mt-5">
                            <Navlogo></Navlogo>
                        </div>
                        <form onSubmit={handleLoginWithEmailandPassword} className="card-body">

                            <div className="form-control">

                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">

                                <input type={showpass ? "text" : "password"} placeholder=" password" name="password" className="input input-bordered" required /><span className="-mt-8 ml-60" onClick={() => setShowpass(!showpass)}>{showpass ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                                <label className="label">
                                    <Link to={'/register'} className="text-black">Yet to<span className="label-text-alt link link-hover text-blue-800 font-semibold text-xl"> register</span> ?</Link>
                                    {/* <a href="#" className="label-text-alt link link-hover">Yet to register?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-lime-700 hover:bg-lime-600 text-xl">Login</button>
                                <Link className="link link-hover" to={'/'}>Back to home page</Link>
                            </div>
                        </form>
                        <div className="p-2 mx-auto">
                            <button onClick={handleGoogleLogin} className="mr-1">log in with <span className="label-text-alt link link-hover text-xl text-blue-500">Google</span> </button>
                            <button onClick={handleGithubLogin}> or with <span className="label-text-alt link link-hover text-blue-950 text-xl">GitHub</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;
import { Link } from "react-router-dom";
import Navlogo from "../../../navbar/Navlogo";


const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-emerald-200 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="ml-24 mt-5">
                        <Navlogo></Navlogo>
                    </div>
                    <form className="card-body">

                        <div className="form-control">

                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <input type="password" placeholder=" password" name="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link to={'/register'} className="text-black">Yet to<span className="label-text-alt link link-hover text-blue-800 font-semibold text-xl"> register</span> ?</Link>
                                {/* <a href="#" className="label-text-alt link link-hover">Yet to register?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-emerald-500 text-xl">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                           
                            <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            
                            <input type="password" placeholder="confirm password" name="confirmPassword" className="input input-bordered" required />
                            <label className="label">
                                <Link to={'/register'} className="text-black">Yet to<span className="label-text-alt link link-hover text-blue-800 font-semibold text-xl"> register</span> ?</Link>
                                {/* <a href="#" className="label-text-alt link link-hover">Yet to register?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
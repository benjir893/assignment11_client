import { Link, useLocation, useNavigate } from "react-router-dom";
import Navlogo from "../../navbar/Navlogo";
import { HelmetProvider } from "react-helmet-async";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../../../services/AuthProvider";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


const Register = () => {
    const { user, createNewUser } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showpass, setShowpass] = useState(false)
    const [confirmshowpass, setConfirmShowpass] = useState(false)

    const handleRegistration = (e) => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget)
        // const name = form.get('name');
        // const email = form.get('email');
        // const password = form.get('password');
        // const confirmPassword = form.get('confirmPassword');
        // const user = {name, email, password, confirmPassword}
        // console.log(user)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const loggeduser = { name, email, password, confirmPassword, photo };
        console.log(loggeduser)
        if (password < 6) {
            Swal.fire('password must be minimum six digits')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("missing at least one upper case latter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire("missing at least one lower case latter");
            return;
        } else if (!/\d/.test(password)) {
            Swal.fire("Missing at least one number");
            return;
        }
        else if (password !== confirmPassword) {
            Swal.fire("confiremed password does not match");
            return;
        }
        createNewUser(email, password)
            .then(userCredential => {
                const newuser = userCredential.user;
                console.log(newuser)
                const createdat = userCredential.user?.metadata?.creationTime;
                const user = {name, email, password, photo, createdat}
                
                // const user = {newuser, createdat}
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(user),
                })
                Swal.fire("new user added successfully")
                navigate(location?.state ? location?.state :'/')
            })
            .catch(err => {
                console.error(err);
                Swal.fire("This email already exist. try with different email account..");
                return;
            })

    }
    return (

        <div className="hero bg-lime-50 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-lime-400 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="ml-24 mt-5">
                        <Navlogo></Navlogo>
                    </div>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">

                            <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="place photo url here" name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type={showpass?"text":"password"} placeholder="password" name="password" className="input input-bordered" required /><span className="ml-64 -mt-8" onClick={()=>setShowpass(!showpass)}>
                                {
                                    showpass?<FaRegEyeSlash />:<FaRegEye />
                                }
                            </span>

                        </div>
                        <div className="form-control mt-4">

                            <input type={confirmshowpass?"text":"password"} placeholder="confirm password" name="confirmPassword" className="input input-bordered" required /><span className="ml-64 -mt-8" onClick={()=>setConfirmShowpass(!confirmshowpass)}>
                                {
                                    confirmshowpass?<FaRegEyeSlash />:<FaRegEye />
                                }
                            </span>
                            <label className="label mt-2">
                                <Link to={'/login'} className="text-black">Already registered ?<span className="label-text-alt link link-hover text-blue-800 font-semibold text-xl"> Log In</span> ?</Link>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-lime-700 hover:bg-lime-600 text-xl">REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;
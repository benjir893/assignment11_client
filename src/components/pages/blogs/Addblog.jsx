import { useContext, useEffect } from "react";
import { Authcontext } from "../../../services/AuthProvider";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Addblog = () => {
    const { user } = useContext(Authcontext);
    const { email } = user || {};
    const navigate = useNavigate();

    const handleAddblogs = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const comment = form.comment.value;
        const image = form.image.value;
        const newcomment = { name, image, comment, email };
        console.log(newcomment);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newcomment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire('A new customer comment is added');
                    navigate('/')
                }
            })
            
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-2xl text-lime-500 font-semibold font-roboto">Please tell us your experience with us</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleAddblogs} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture</span>
                                </label>
                                <input type="text" placeholder="place the url of picture" name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea type="text" placeholder="write your comment here" name="comment" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-lime-700 hover:bg-lime-600 text-xl">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Addblog;
import { useContext, useState } from "react";
import { Authcontext } from "../../../services/AuthProvider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AddQuery = () => {
    const { user } = useContext(Authcontext);
    const { email } = user || {};
    // const [otherinfo, setOtherinfo] = useState([]);
    // fetch('http://localhost:5000/users')
    //     .then(res => res.json())
    //     .then(data => setOtherinfo(data))
    // const name = otherinfo;
    // const photo = otherinfo;

    // const { name } = user;
    // const { photo } = user;
    const handleAddQuery = (e) => {
        e.preventDefault();

        const form = e.target;
        const ProductImage = form.photo.value;
        const QueryTitle = form.queryTitle.value;
        const ProductName = form.prodName.value;
        const BrandName = form.brandName.value;
        const name = form.name.value;
        const image = form.image.value;
        const AlternationReason = form.alterReason.value;
        const DatePosted = form.DatePosted.value;
        // const DatePosted = 
        // const UserInfo = {name, image};
        const addquery = { ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, name, image, DatePosted, email }
        console.log(addquery)

        fetch('http://localhost:5000/queryproduct',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(addquery),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire("A new query has been added");
            }
        })

    }

    return (
        <div className="hero bg-blue-200 min-h-screen">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="text-center">
                    <h1 className="text-blue-700 text-2xl font-roboto">Add My Query</h1>
                </div>
                <form onSubmit={handleAddQuery} className="card-body">
                    <div className="md:grid grid-cols-2 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ProductImage</span>
                            </label>
                            <input type="text" placeholder="image url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">QueryTitle</span>
                            </label>
                            <input type="text" placeholder="QueryTitle" name="queryTitle" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ProductName</span>
                            </label>
                            <input type="text" placeholder="ProductName" name="prodName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">BrandName</span>
                            </label>
                            <input type="text" placeholder="BrandName" name="brandName" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="user name" name="name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" placeholder="user image" name="image" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control">
                        <label>
                            <span className="label-text">AlternationReason</span>
                        </label>
                        {/* <input type="textarea" placeholder="AlternationReason" className="input input-bordered" required /> */}
                        <textarea rows={20} cols={50} placeholder="AlternationReason" className="input input-bordered" required name="alterReason"></textarea>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">DatePosted</span>
                            </label>
                            <input type="date" placeholder="place date" name="DatePosted" className="input input-bordered" required />

                        </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-lime-500 text-blue-700 text-2xl font-roboto  hover:bg-lime-400">Add</button>
                    </div>
                </form>
                <Link className="mx-auto" to={'/queries'}><button className="btn btn-primary bg-lime-500 text-blue-700 text-2xl font-roboto hover:bg-lime-400">cancel</button></Link>
            </div>
        </div>
    );
};

export default AddQuery;
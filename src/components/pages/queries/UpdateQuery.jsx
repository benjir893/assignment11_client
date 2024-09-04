import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../services/AuthProvider";
import Navlogo from "../../navbar/Navlogo";
import Swal from "sweetalert2";
import { Result } from "postcss";
import { data } from "autoprefixer";


const UpdateQuery = () => {
    const user = useContext(Authcontext);
    // const { email } = user || {};
    const queries = useLoaderData();
    const navigate = useNavigate();
    const { _id, ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, DatePosted} = queries;

    const handleUpdateQuery = (e) => {
        e.preventDefault();

        const form = e.target;
        const ProductImage = form.photo.value;
        const QueryTitle = form.queryTitle.value;
        const ProductName = form.prodName.value;
        const BrandName = form.brandName.value;
        // const name = form.name.value;
        // const image = form.image.value;
        const AlternationReason = form.alterReason.value;
        const DatePosted = form.DatePosted.value;
        // const DatePosted = 
        // const UserInfo = { name, image };
        const addquery = { ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, DatePosted }
        console.log(addquery)
        Swal.fire({
            title: "Are you sure to update?",
            text: "press cancel if you don't want",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/queryproduct/${_id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(addquery)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "UPDATED!",
                                text: "query has benn Updated",
                                icon: "success"
                            });
                            navigate('/myqueries');
                        }
                    })
            }

        })

    }
    return (
        <div className="hero bg-blue-200 min-h-screen mb-4">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className=" flex text-center">
                    <Navlogo></Navlogo>
                    <h1 className="text-blue-700 text-2xl font-roboto p-4 font-semibold">Update My Query</h1>
                </div>
                <form onSubmit={handleUpdateQuery} className="card-body">
                    <div className="md:grid grid-cols-2 gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ProductImage</span>
                            </label>
                            <input type="text" defaultValue={ProductImage} placeholder="image url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">QueryTitle</span>
                            </label>
                            <input type="text" defaultValue={QueryTitle} placeholder="QueryTitle" name="queryTitle" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ProductName</span>
                            </label>
                            <input type="text" defaultValue={ProductName} placeholder="ProductName" name="prodName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">BrandName</span>
                            </label>
                            <input type="text" defaultValue={BrandName} placeholder="BrandName" name="brandName" className="input input-bordered" required />

                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" defaultValue={name} placeholder="user name" name="name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" defaultValue={image} placeholder="user image" name="image" className="input input-bordered" required />

                        </div> */}
                    </div>
                    <div className="form-control">
                        <label>
                            <span className="label-text">AlternationReason</span>
                        </label>
                        {/* <input type="textarea" placeholder="AlternationReason" className="input input-bordered" required /> */}
                        <textarea rows={20} cols={50} defaultValue={AlternationReason} placeholder="AlternationReason" className="input input-bordered" required name="alterReason"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">DatePosted</span>
                        </label>
                        <input type="date" defaultValue={DatePosted} placeholder="place date" name="DatePosted" className="input input-bordered" required />

                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input type="email" defaultValue={email} placeholder="place date" name="DatePosted" className="input input-bordered" required />

                    </div> */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-green-300 text-blue-700 text-2xl font-roboto">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateQuery;
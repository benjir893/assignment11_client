import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../services/AuthProvider";
import Swal from "sweetalert2";


const AddMyrecomendation = () => {
    const { user } = useContext(Authcontext);
    const { email } = user || {};
    const navigate = useNavigate();

    const handleAddmyrecomendation = e => {
        e.preventDefault();
        const form = e.target;
        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendationReason = form.recommendationReason.value;
        const queryId = form.queryId.value;
        const queryTitle = form.queryTitle.value;
        const productName = form.productName.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const recommenderEmail = email;  //form.recommenderEmail.value;
        const recommenderName = form.recommenderName.value;
        const currentTimeStamp = form.currentTimeStamp.value;
        const queryInfo = { recommendationTitle, recommendedProductName, recommendedProductImage, recommendationReason, queryId, queryTitle, productName, userEmail, userName, recommenderEmail, recommenderName, currentTimeStamp }
        console.log(queryInfo)
        fetch('http://localhost:5000/recomendation', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(queryInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire("your data has been saved");
                      navigate('/myrecomendation');

                }
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold font-roboto text-blue-700">Add a New Query</h1>
                    </div>
                    <div className="card bg-base-100 max-w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleAddmyrecomendation} className="card-body w-full">
                            <div className="form-control md:grid grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recommended Query</span>
                                    </label>
                                    <input type="text" placeholder="recommendationTitle" name="recommendationTitle" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recommended Product Name</span>
                                    </label>
                                    <input type="text" placeholder="recommendedProductName" name="recommendedProductName" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recommended Product Image</span>
                                </label>
                                <input type="text" placeholder="place image url" name="recommendedProductImage" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Reason of Recommendation</span>
                                </label>
                                <textarea type="text" placeholder="recommendationReason" name="recommendationReason" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Query Id</span>
                                </label>
                                <select name="queryId" id="">
                                    <option disabled selected>select the Query Id</option>
                                    <option value="Q12345">Q12345 for garments</option>
                                    <option value="Q21345">Q21345 for shoe</option>
                                    <option value="Q31245">Q31245 for cellphone</option>
                                    <option value="Q41235">Q41235 for Laptop/pc</option>
                                    <option value="Q51234">Q51234 for Other electronics</option>
                                    <option value="Q12453">Q12453 for Other furnitures</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Query Title</span>
                                </label>
                                <input type="text" placeholder="queryTitle" name="queryTitle" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="productName" name="productName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">user Email</span>
                                </label>
                                <input type="email" placeholder="userEmail" name="userEmail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">user Name</span>
                                </label>
                                <input type="text" placeholder="userName" name="userName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">recommender Name</span>
                                </label>
                                <input type="text" placeholder="recommender Name" name="recommenderName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Posted On</span>
                                </label>
                                <input type="date" placeholder="select date please" name="currentTimeStamp" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-500 text-blue-700 text-2xl font-roboto">Submit Query</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddMyrecomendation;
import { Link, useLoaderData } from "react-router-dom";


const RecomendationDetails = () => {
    const recomend = useLoaderData();
    const { queryTitle, recommendedProductName, recommendedProductImage, recommendationTitle, userName, userEmail, recommendationReason, recommenderEmail, recommenderName, currentTimeStamp } = recomend;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-full p-4 shadow-xl mx-auto lg:grid grid-cols-2 gap-2 ">
                <figure>
                    <img
                        className="rounded-lg"
                        src={recommendedProductImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body border-solid border-lime-500 border-2 rounded-lg">
                    <h2 className="card-title">Query Title: {queryTitle}</h2>
                    <h2 className="card-title">Recommendate Product: {recommendedProductName}</h2>
                    <div className="">
                        <p> Recommendation: {recommendationTitle}</p>
                        <p> Reason of Recommendation: {recommendationReason}</p>
                        <p> Requester Name: {userName}</p>
                        <p> Requester email: {userEmail}</p>
                        <p> Recommender email: {recommenderEmail}</p>
                        <p> Recommender Name: {recommenderName}</p>
                        <p> Posted: {currentTimeStamp}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={'/recomendation'}><button className="btn hover:bg-orange-500 bg-lime-400 text-blue-800">Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendationDetails;
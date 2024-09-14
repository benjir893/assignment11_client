import { Link } from "react-router-dom";


const RecomendationDisplay = ({ recomend }) => {
    const {_id, recommendedProductImage, recommendedProductName, queryTitle} = recomend;
    console.log(_id)
    return (
        <div className="my-10">
            <div className="card card-compact bg-base-100 w-96 shadow-xl min-h-full">
                <figure>
                    <img
                        src={recommendedProductImage}
                        alt="pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recommendedProductName}</h2>
                    <p>{queryTitle}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/recomenddetails/${_id}`}><button className="btn  hover:bg-orange-500 bg-lime-400 text-blue-800">More Details..</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendationDisplay;
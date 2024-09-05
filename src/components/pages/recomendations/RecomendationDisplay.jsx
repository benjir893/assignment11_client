

const RecomendationDisplay = ({ recomend }) => {
    const { recommendedProductImage, recommendedProductName, queryTitle} = recomend;

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={recommendedProductImage}
                        alt="pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recommendedProductName}</h2>
                    <p>{queryTitle}</p>
                    <div className="card-actions justify-end">
                        <button className="btn  hover:bg-orange-500 bg-lime-400 text-blue-800">More Details..</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendationDisplay;
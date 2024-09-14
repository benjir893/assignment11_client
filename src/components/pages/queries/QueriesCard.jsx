import { Link } from "react-router-dom";
import Subnav from "../../navbar/Subnav";


const QueriesCard = ({ productquery }) => {
    const {_id, ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, DatePosted, name, image, email } = productquery;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl min-h-full ">
                <figure className="px-10 pt-10">
                    <img
                        src={ProductImage}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{QueryTitle}</h2>
                    <h2 className="card-title">{ProductName}</h2>
                    <h2 className="card-title">{BrandName}</h2>
                    {/* <p>{AlternationReason}</p>
                    <p>{DatePosted}</p>
                    <p>{email}</p>
                    <p>{name}</p>
                    <figure className="w-20 h-20 rounded-full">
                        <img
                            src={image}
                            alt="User"
                            className="w-20 h-20 rounded-full" />
                    </figure> */}
                    <div className="card-actions">
                        <Link to={`/myquerydetails/${_id}`} ><button className="btn  hover:bg-lime-300 bg-lime-500 text-blue-800">More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueriesCard;
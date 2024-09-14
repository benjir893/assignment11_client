import { Link } from "react-router-dom";


const Querybanner = () => {
    return (
        <div className="">
            <div className=" my-16 text-center">
                <h1 className="text-center text-lime-500 text-2xl font-roboto my-10">Pease Check out the Queries...</h1>
                <p className="text-center text-lg text-lime-600 font-roboto w-1/3 mx-auto">You may view all queries, Where you may find what you are looking for. There are many existing queries from our existing valuable customers. Also there are many more other updates also available...</p>
            </div>
            <div className="carousel carousel-center rounded-box w-2/3 ml-48 relative border border-solid border-lime-500">
                <div className="carousel-item w-1/3 border-r border-solid border-lime-500">
                    <Link to={'http://localhost:5173/queries'} className="absolute my-5 p-3 text-white font-roboto font-semibold hover:link link-hover">click to learn more...</Link>
                    <img src="https://i.ibb.co/Yt4nhRk/shoes-basketball.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item w-1/3 border-r border-solid border-lime-500">
                    <Link to={'http://localhost:5173/queries'} className="absolute my-5 p-3 text-white font-roboto font-semibold hover:link link-hover">click to learn more...</Link>
                    <img className="h-full" src="https://i.ibb.co/ftLpSX0/jutedrawingroomset.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item w-1/3">
                    <Link to={'http://localhost:5173/queries'} className="absolute my-5 p-3 text-white font-roboto font-semibold hover:link link-hover">click to learn more...</Link>
                    <img src="https://i.ibb.co/QD16sQm/iphone15pro.jpg" alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default Querybanner;
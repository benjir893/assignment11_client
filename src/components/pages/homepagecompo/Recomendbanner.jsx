import { Link } from "react-router-dom";


const Recomendbanner = () => {
    return (
        <div className="">
            <div className=" my-16 text-center">
                <h1 className="text-center text-lime-500 text-2xl font-roboto my-10">Pease Check out  Recommendations...</h1>
                <p className="text-center text-lg text-lime-600 font-roboto w-1/3 mx-auto">You may view all recommendations, Where you may find what you are looking for. There are many existing excellent recommendations from our experience working Team. Also there are many more other updates also available...</p>
            </div>
            <div className="carousel carousel-center rounded-box w-2/3 ml-48 relative border border-solid border-lime-500">
                <div className="carousel-item w-1/3 border-r border-solid border-lime-500">
                    <Link to={'http://localhost:5173/recomendation'} className="absolute my-5 p-3 text-lime-600 font-roboto font-semibold hover:link link-hover">click to learn more...</Link>
                    <img src="https://i.ibb.co/WKBH0Cd/m16pc.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item w-1/3 border-r border-solid border-lime-500">
                    <Link to={'http://localhost:5173/recomendation'} className="absolute my-5 p-3 text-lime-600 font-roboto font-semibold hover:link link-hover">click to learn more...</Link>
                    <img className="h-full" src="https://i.ibb.co/55B9yGX/tablet-acer.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item w-1/3">
                    <Link to={'http://localhost:5173/recomendation'} className="absolute my-5 p-3 text-lime-600 font-roboto font-semibold hover:link link-hover">click to learn more...</Link>
                    <img src="https://i.ibb.co/fvkcw1t/denimjacket.jpg" alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default Recomendbanner;
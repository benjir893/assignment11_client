import { useLoaderData } from "react-router-dom";
import RecomendationDisplay from "./RecomendationDisplay";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";


const Recomendations = () => {
    const recomends = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 ml-10 gap-2">
                {
                    recomends.map(recomend =><RecomendationDisplay key={recomend._id} recomend={recomend}></RecomendationDisplay>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Recomendations;
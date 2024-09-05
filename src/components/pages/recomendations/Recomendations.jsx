import { useLoaderData } from "react-router-dom";
import RecomendationDisplay from "./RecomendationDisplay";


const Recomendations = () => {
    const recomends = useLoaderData();
    return (
        <div>
            
            <div className="md:grid grid-cols-2 lg:grid-cols-3 ml-10 gap-2">
                {
                    recomends.map(recomend =><RecomendationDisplay key={recomend._id} recomend={recomend}></RecomendationDisplay>)
                }
            </div>
        </div>
    );
};

export default Recomendations;
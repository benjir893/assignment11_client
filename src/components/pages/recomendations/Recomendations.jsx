import { useLoaderData } from "react-router-dom";


const Recomendations = () => {
    const recomends = useLoaderData();
    return (
        <div>
            <h1>total recommendations are : {recomends?.length}</h1>
        </div>
    );
};

export default Recomendations;
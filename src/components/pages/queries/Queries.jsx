import { useLoaderData } from "react-router-dom";
import QueriesCard from "./QueriesCard";


const Queries = () => {
    const productQueries = useLoaderData();
    return (
        <div>
            {/* <p>queries numbers: {productQueries.length}</p> */}
            <h1 className="text-2xl font-bungee_Tint text-center m-3">All Queries</h1>

            <div className="md:grid grid-cols-2 lg:grid-cols-3 ml-10 gap-2">
                {
                    productQueries.map(productquery =><QueriesCard key={productquery._id} productquery={productquery}></QueriesCard>)
                }
            </div>
        </div>
    );
};

export default Queries;
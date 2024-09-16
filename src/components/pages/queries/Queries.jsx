import { useLoaderData } from "react-router-dom";
import QueriesCard from "./QueriesCard";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";


const Queries = () => {
    // const productQueries = useLoaderData();
    const[productQueries, setProductQueries] = useState([]);
    const url = `http://localhost:5000/queryproduct`; 
    useEffect(()=>{
        axios.get(url, {withCredentials: true})
        .then(res =>{setProductQueries(res.data)})
    },[])
    return (
        <div>
            <Navbar></Navbar>
            {/* <p>queries numbers: {productQueries.length}</p> */}
            <h1 className="text-2xl font-bungee_Tint text-center m-3">All Queries</h1>

            <div className="md:grid grid-cols-2 lg:grid-cols-3 ml-10 gap-2">
                {
                   productQueries?.map(productquery =><QueriesCard key={productquery._id} productquery={productquery} setProductQueries={setProductQueries}></QueriesCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Queries;
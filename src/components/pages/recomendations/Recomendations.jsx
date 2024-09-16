import { useLoaderData } from "react-router-dom";
import RecomendationDisplay from "./RecomendationDisplay";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";


const Recomendations = () => {
    // const recomends = useLoaderData();
    const [recomends, setRecomends] = useState([]);
    const url = `http://localhost:5000/recomendation`;
    useEffect(()=>{
        axios.get(url, {withCredentials: true})
        .then(res =>{setRecomends(res.data)})
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 ml-10 gap-2">
                {
                  Array.isArray(recomends)&&  recomends?.map(recomend =><RecomendationDisplay key={recomend._id} recomend={recomend}></RecomendationDisplay>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Recomendations;
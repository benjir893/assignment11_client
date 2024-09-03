import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Authcontext } from "../../../services/AuthProvider";
import MyqueriesCard from "./MyqueriesCard";
import Subnav from "../../navbar/Subnav";


const Myqueries = () => {
    const { user } = useContext(Authcontext)
    const { email } = user || {};
    const queries = useLoaderData();
    const [currentQueries, setCurrentQueries] = useState(queries)
    const myqueries = currentQueries?.filter(user => user?.email === email)
    return (
        <div>
            <h1 className="text-2xl font-bungee_Tint text-center mt-3">My Queris</h1>
            <div className="md:flex w-full">
                <Link className=" mb-2 " to={'/addquery'}><button className="label-text-alt link link-hover text-xl font-semibold text-blue-700 font-roboto">Add new Query</button></Link>
                
            </div>
            {/* <p>{myqueries?.length}</p> */}
            <div className="md:grid grid-cols-2 gap-2">
                {
                    myqueries ?<>{myqueries?.map(myquery => <MyqueriesCard key={myquery._id} myquery={myquery} currentQueries={currentQueries} setCurrentQueries={setCurrentQueries}></MyqueriesCard>)}
                    </>:<p className="text-2xl text-orange-500 font-roboto">No query found</p>
                    
                }
            </div>
        </div>
    );
};

export default Myqueries;
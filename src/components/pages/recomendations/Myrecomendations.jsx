import { Link, useLoaderData } from "react-router-dom";
import MyrecomendDisplay from "./MyrecomendDisplay";
import { useContext, useState } from "react";
import { Authcontext } from "../../../services/AuthProvider";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";


const Myrecomendations = () => {
    const { user } = useContext(Authcontext)
    const { email } = user || {}
    const myrecomendations = useLoaderData();
    const [myrecomended, setMyrecomended] = useState(myrecomendations)
    const selectMyrecomends = myrecomended?.filter(user => user?.recommenderEmail === email)


    return (
        <div>
            <Navbar></Navbar>
            <div className="my-2 ml-2">
                <Link to={'/addmyrecomendation'}><button className="btn hover:bg-lime-300 bg-lime-500 text-blue-800">Add New Recommendation</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <th>
                            <th>Recommended Product</th>
                            <th>Recom. Prod. Name</th>
                            <th>Recommendation</th>
                            <th>produc tName</th>
                            <th>user Email</th>
                            <th>Recommender Email</th>
                            <th>Posted on</th>
                        </th>
                    </thead>
                    <tbody>
                        {
                            selectMyrecomends?.map(myrecomend => <MyrecomendDisplay key={myrecomend._id} myrecomend={myrecomend} myrecomended={myrecomended} setMyrecomended={setMyrecomended}></MyrecomendDisplay>)
                        }
                    </tbody>


                </table>
            </div>
            <div className="">

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Myrecomendations;
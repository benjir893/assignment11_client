import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";


const MyqueriesCard = ({ myquery, currentQueries, setCurrentQueries}) => {
    const {_id, ProductImage, QueryTitle, ProductName, BrandName, AlternationReason, DatePosted, name, image } = myquery

    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
            title: "Surely want to Delete?",
            text: "Action can't be revert!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/queryproduct/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount >0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Data has been deleted.",
                            icon: "success"
                          });
                          const remainingQueries = currentQueries?.filter(remainQuery=> remainQuery._id !== _id)
                          setCurrentQueries(remainingQueries)
                    }
                })
              
            }
          });
    }
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl min-h-full ">
                <figure className="px-10 pt-10">
                    <img
                        src={ProductImage}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{QueryTitle}</h2>
                    <h2 className="card-title">{ProductName}</h2>
                    <h2 className="card-title">{BrandName}</h2>
                    <p>{AlternationReason}</p>
                    <p>{DatePosted}</p>
                    <p>{name}</p>
                    <figure className="w-20 h-20 rounded-full">
                        <img
                            src={image}
                            alt="User"
                            className="w-20 h-20 rounded-full" />
                    </figure>

                    {/* <p>{UserInfo.image}</p> */}

                    <div className="card-actions">
                        <Link to={`/myquerydetails/${_id}`}><button className="btn hover:bg-lime-300 bg-lime-500 text-blue-800"><FcViewDetails /></button></Link>

                        <Link><button onClick={()=>handleDelete(_id)} className="btn hover:bg-lime-300 bg-lime-500 text-blue-800"><MdDeleteOutline /></button></Link>

                        <Link to={`/updatequery/${_id}`}><button className="btn hover:bg-lime-300 bg-lime-500 text-blue-800"><FaEdit /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyqueriesCard;
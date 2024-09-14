import Swal from "sweetalert2";


const MyrecomendDisplay = ({ myrecomend, myrecomended, setMyrecomended }) => {
    const { _id, recommendedProductImage, recommendedProductName, recommendationTitle, productName, userEmail, recommenderEmail, currentTimeStamp } = myrecomend;

    const handledelet = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recomendation/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myrecomended?.filter(remainingdata => remainingdata._id !== id)
                            setMyrecomended(remaining)
                        }
                    })

            }
        });

    }

    return (
        <div>
            <tr>
                <th>
                    <button onClick={() => handledelet(_id)} className="btn btn-circle btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button></th>
                <td>
                    <div className="">
                        <img className="w-16 h-16 rounded-lg"
                            src={recommendedProductImage} alt="picture" />
                    </div>
                </td>
                <td>{recommendedProductName}</td>
                <td>{recommendationTitle}</td>
                <td>{productName}</td>
                <td>{userEmail}</td>
                <td>{recommenderEmail}</td>
                <td>{currentTimeStamp}</td>
            </tr>
        </div>
    );
};

export default MyrecomendDisplay;
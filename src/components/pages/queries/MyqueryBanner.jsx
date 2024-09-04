

const MyqueryBanner = () => {
    return (
        <div className="mx-auto my-10">
            <div className="carousel carousel-end rounded-box max-h-96 ml-20 relative">
                <div className="absolute w-full ml-5 my-10 bg-gradient-to-r from-lime-100 to-transparent">
                    <li className="text-blue-700 text-xl font-roboto font-semibold">Replce Item/Items</li>
                    <li className="text-blue-700 text-xl font-roboto font-semibold">Repair Product/Any Item</li>
                    <li className="text-blue-700 text-xl font-roboto font-semibold">Add quantity of Item</li>
                    <li className="text-blue-700 text-xl font-roboto font-semibold">Change Shipping Address</li>
                </div>
                <div className="absolute w-full">
                    <h1 className="text-6xl font-bungee_Tint text-center mx-auto my-16">My Queris</h1>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/8Xqpc4b/jutedeco.jpg" alt="Drink" />
                    {/* https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp */}
                </div>
                <div className="carousel-item">
                {/* https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp */}
                    <img
                        src="https://i.ibb.co/7gTqtCp/woodsc3.jpg"
                        alt="Drink" />
                </div>
                <div className="carousel-item">
                {/* https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp */}
                    <img
                        src="https://i.ibb.co/dDwwS8b/addidas.jpg"
                        alt="Drink" />
                </div>
                <div className="carousel-item">
                {/* https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp */}
                    <img
                        src="https://i.ibb.co/x5Xtt7v/zara.jpg"
                        alt="Drink" />
                </div>
            </div>
        </div>
    );
};

export default MyqueryBanner;
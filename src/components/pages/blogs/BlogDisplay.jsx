

const BlogDisplay = ({ blog }) => {
    const { name, comment, image } = blog;
    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-xl border border-solid border-lime-500 m-2 min-h-full">
                <figure>
                    <img className="rounded-lg w-24 h-24 mt-2"
                        src={image}
                        alt="pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDisplay;
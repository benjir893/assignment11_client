import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import BlogDisplay from "./BlogDisplay";
import Marquee from "react-fast-marquee";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="mx-14">
            <h1 className="text-center text-lime-500 text-2xl font-roboto my-10">Our Customer's Says</h1>
            <Marquee>
                <div className="md:flex ">
                    {
                        blogs.map(blog => <BlogDisplay key={blog._id} blog={blog}></BlogDisplay>)
                    }
                </div>
            </Marquee>

        </div>
    );
};

export default Blogs;
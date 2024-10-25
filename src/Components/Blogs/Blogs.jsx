import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
    fetch('Blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog =>
                     <Blog key={blog.div}
                      blog={blog}
                      handleAddToBookmark={handleAddToBookmark}
                      ></Blog>)
            }
        </div>
    );
};

export default Blogs;
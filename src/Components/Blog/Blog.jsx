import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full border-2 mb-8"  src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                 <img width={60} src={author_img} alt="" />
                 <div className="ml-6">
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                 </div>
                </div>
                <div>
                  <span>{reading_time} min read</span>
                  <button onClick={handleAddToBookmark}
                   className="ml-2 text-2xl text-blue-500"><FaBookmark></FaBookmark>
                   </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}><a href="">  {hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;
import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const url = "http://localhost:3002/blogs";
    const fetchData = async () => {
      const res = await fetch(url, { signal });
      const data = await res.json();
      setBlogs(data);
    };

    fetchData();

    () => {
      controller.abort();
    };
  }, []);

  console.log("blogs", blogs);
  return (
    <div className="blog-detail-wrap">
      <h3>Blogs</h3>

      <div className="card-wrapper">
        {blogs &&
          blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`}>
              <BlogCard
                img={blog.imageUrl}
                tags={blog.tags}
                title={blog.title}
                desc={blog.desc}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

const BlogCard = ({ img, tags, title, desc }) => {
  return (
    <div className="card">
      <img src={img} width="100%" />

      <div>
        <div className="card-tag-wrapper">
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <p className="card-title">{title}</p>
        <p className="card-desc">
          {desc}
          ......
        </p>
      </div>
      <div className="see-more-wrapper">
        <p className="see-more">See More</p>
        <FiChevronRight size="15" />{" "}
      </div>
    </div>
  );
};

export default BlogPage;

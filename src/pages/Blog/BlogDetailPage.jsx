import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./BlogDetailPage.css";

const BlogDetailPage = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  let [blogDetail, setBlogDetail] = useState([]);
  let [blogRecent, setBlogRecent] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let url = `http://localhost:3002/blogs/${id}`;

    let fetchData = async () => {
      const res = await fetch(url, { signal });
      const data = await res.json();

      setBlogDetail(data);
    };

    fetchData();
    () => {
      controller.abort();
    };
  }, [id]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const url = "http://localhost:3002/blogs?_start=1&_end=4";
    const fetchData = async () => {
      const res = await fetch(url, { signal });
      const data = await res.json();
      setBlogRecent(data);
    };

    fetchData();

    () => {
      controller.abort();
    };
  }, []);

  console.log("blogDetail", blogDetail);

  const handleExplore = () => {
    navigate("/blog");
  };

  return (
    <div className="blog-detail-main">
      <div className="blog-detail-wrapper">
        <img src={blogDetail.imageUrl} alt="" width="40%" />

        <p className="blog-detail-title">{blogDetail.title}</p>
        <p>{blogDetail.desc}</p>

        <div className="tags">
          {blogDetail?.tags?.map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
      </div>

      <div className="blog-detail-right">
        <p className="recent-title">Recent Blog</p>

        <div>
          {blogRecent?.map((e, i) => (
            <Link to={`/blog/${e.id}`}>
              <BlogCard
                key={i}
                img={e.imageUrl}
                title={e.title}
                desc={e.desc}
                id={e.id}
                locId={id}
              />
            </Link>
          ))}
        </div>

        <p className="explore" onClick={handleExplore}>
          Explore
        </p>
      </div>
    </div>
  );
};

const BlogCard = ({ id, locId, img, title, desc }) => {
  return (
    <div className={`blog-card ${+locId === +id && "select"}`}>
      <img src={img} alt="" width="100%" height="200px" />
      <div className="blog-info">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;

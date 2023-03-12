import React, { useEffect, useState } from "react";
import "./NotFoundPage.css";
import NoFoundImage from "../../assets/not-found.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  let [count, setCount] = useState(5);
  const navigate = useNavigate();

  let getCount = () => {
    if (count === 0) {
      setCount(0);
      navigate("/");
    } else {
      setCount(--count);
    }
  };
  useEffect(() => {
    const interval = setInterval(getCount, 1000);

    return () => clearInterval(interval);
  }, [count]);

  console.log("Count", count);
  return (
    <div className="not-found-wrapper">
      <p className="count">{count}</p>

      <img src={NoFoundImage} alt="" width="20%" />

      <div className="no-found-text-wrap">
        <p> Go back Home in {count} seconds.</p>
        <p className="text-link">
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

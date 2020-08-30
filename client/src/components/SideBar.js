import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function createSideBlogTitle(blogTitle) {
  console.log("check12");
  return <h6>{blogTitle.title}</h6>;
}

function Sidebar() {

  const [blogpostTitles, setBlogpostTitles] = useState([]);

  useEffect(() => {
    console.log("mounted meeee");
    axios
      .get("http://localhost:5000/blogposts/")
      .then(function (res) {
        setBlogpostTitles(res.data);
        console.log(blogpostTitles);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div style={{ textAlign: "right" }}>
      <div>
        <a
          href="https://www.instagram.com/kwanxhen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="kx-profile-pic.JPEG"
            alt="profile of kwanxhen"
            height="250"
            width="200"
          />
        </a>
      </div>
      <h6
        style={{
          marginTop: "10px",
          fontFamily: "Open Sans",
          color: "rgba(0,0,0,.84)",
        }}
      >
        kwanxhen.me
      </h6>
      <ul
        style={{
          listStyle: "none",
          textDecoration: "underline",
          color: "yellow",
        }}
      >
        <li>
          <Link to="/" style={{ color: "#262626" }}>
            home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "#262626" }}>
            about
          </Link>
        </li>

        <li>
          <a
            href="https://twitter.com/kwanxhen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#262626" }}
          >
            twitter
          </a>
        </li>
      </ul>

      <h6
        style={{
          marginBottom: "0",
          fontFamily: "Open Sans",
          color: "rgba(0,0,0,.84)",
        }}
      >
        subscribe
      </h6>
      <form action="https://google.com" method="post">
        <input type="email" placeholder="email address" required />
        <Button
          type="submit"
          variant="outline-dark"
          size="sm"
          style={{ marginTop: "3px" }}
        >
          submit
        </Button>
      </form>
      
      {blogpostTitles.map(createSideBlogTitle)}
    </div>
  );
}

export default Sidebar;

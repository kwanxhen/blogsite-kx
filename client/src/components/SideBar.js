import React from "react";
import Button from 'react-bootstrap/Button';

function Sidebar() {
  return (
    <div style={{ textAlign: "right" }}>
      <div>
        <a href="https://www.instagram.com/kwanxhen/" target="_blank">
          <img
            src="https://instagram.fsin1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/83441816_498409914447348_5767187672467782_n.jpg?_nc_ht=instagram.fsin1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=TBAM5jFLhAUAX_WCCxA&oh=fec08dec8761a59c04a1a205466438d6&oe=5F3EA9E6"
            height="250"
            width="200"
          />
        </a>
      </div>
      <h6 style={{marginTop: '10px', fontFamily: 'Open Sans', color: 'rgba(0,0,0,.84)'}}>kwanxhen.me</h6>
      <ul
        style={{
          listStyle: "none",
          textDecoration: "underline",
          color: "yellow",
        }}
      >
        <li>
          <a href="/" style={{ color: "#262626" }}>
            home
          </a>
        </li>
        <li>
          <a href="/about" style={{ color: "#262626" }}>
            about
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/kwanxhen"
            target="_blank"
            style={{ color: "#262626" }}
          >
            twitter
          </a>
        </li>
      </ul>
      
      <h6 style={{marginBottom: "0", fontFamily: 'Open Sans', color: 'rgba(0,0,0,.84)'}}>subscribe</h6>
      <form action="https://google.com" method="post">
        <input type="email" placeholder="email address" required />
        <Button type="submit" variant="outline-dark" size="sm" style={{marginTop:'3px'}}>submit</Button>
      </form>
    </div>
  );
}

export default Sidebar;

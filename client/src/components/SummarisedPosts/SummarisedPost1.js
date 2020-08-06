import React from "react";
import { Link } from "react-router-dom";

function SummarisedPost1() {
  return (
    <div >
      <h1>
        <Link className="blogTitle"to="/post1">
          “Thinking outside the box” vs “Expanding the box”
        </Link>
      </h1>
      <p className="dateAndTime">August 1, 2020, 400 Words</p>
      <h3>The clockwork laws of cause and effect.</h3>
      <p>
        In the first 10-20 years of our lives, the persona we take up is largely
        caused by circumstances that are not within our control.
      </p>
      <ol>
        <li>
          The beliefs and values of our parents are adopted by us as we depend on our parents for survival.
        </li>
        <li>
          The choice of school that we are enrolled in is largely dependent on
          our family's financial circumstances.
        </li>
        <li>
          The physical appearance you are endowed with has contributed to some
          of your early accomplishments or a lack thereof.
        </li>
      </ol>
      <hr className="bottomSpace" />
    </div>
  );
}

export default SummarisedPost1;

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="home">
    <h2 css={styles}>
      ON <span>FIT</span>
    </h2>
  </Link>
);

const styles = css`
  color: #00AAFF;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #232441;
    text-shadow: -1px -1px 0 #00AAFF, 1px -1px 0 #00AAFF, -1px 1px 0 #00AAFF, 1px 1px 0 #00AAFF;

  }
`;

export default Logo;

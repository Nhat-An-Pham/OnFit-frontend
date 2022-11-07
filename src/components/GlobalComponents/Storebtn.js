/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Storebtn = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
  </a>
);

const styles = css`
  display: inline-block;
  background: white;
  opacity: 0.5;
  color: black;
  font-size: 14px;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  width: 20%;
  height: 3rem;
  &:hover {
    background: black;
    color: white;
    opacity: 1;
  }
`;

export default Storebtn;
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../GlobalComponents/Button";
import Storebtn from "../GlobalComponents/Storebtn";

const Info = () => (
  <div css={styles} className="info">
    <h1>
      WORK HARDER <br />
      <span>GET STRONGER</span>
    </h1>
    <Link to="/signup">
      <Button text="BECOME A MEMBER" />
    </Link>
    <p>GET US ON</p>
    
    <Storebtn text="APPSTORE" />
    <Storebtn text="CH PLAY" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #00AAFF;
  p {
    margin: 20px 0px;
  }
  h1 {
    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #131429;
      text-shadow: -1px -1px 0 #00AAFF, 1px -1px 0 #00AAFF, -1px 1px 0 #00AAFF, 1px 1px 0 #00AAFF;
    }
  }
  .btn {
    padding: 14px 16px;
    margin: 0px 20px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Socials from "./Socials";

const TrainerCard = ({ title, name, desc, img }) => (
  <div css={styles} className="card">
    <img src={img} alt="trainer" />
    <h5>{title}</h5>
    <h3>{name}</h3>
    <p>{desc}</p>
    <Socials />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 44px;
  box-shadow: 4px -6px 17px 4px rgb(0 0 0 / 10%);
  text-align: left;
  border-radius: 20px;
  img {
    width: 100%;
    height: 350px;
    overflow: hidden;
  }
  h5 {
    color: #ed563b;
    margin: 26px 0 9px 0;
    font-weight: 500;
    font-size: 14px;
  }
  h3 {
    color: #232d39;
    letter-spacing: 1px;
  }
  p {
    margin: 24px 0 28px 0;
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }
  @media (max-width: 830px) {
    max-width: 540px;
    margin: 14px 0;
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;

export default TrainerCard;

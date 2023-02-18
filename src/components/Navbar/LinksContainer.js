/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Link from "./Link";
import Button from "../GlobalComponents/Button";
import { Link as ReactLink } from "react-router-dom";

const LinksContainer = ({ hidden }) => {
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>
        <Link name="HOME" linkTo="/home" />
        <Link name="CONTACT" linkTo="/contact" />
        <Link name="EXCERCISES" linkTo="/excercises" />
      <ReactLink to="/userlogin">
        <Button text="Join Us Now !" />
      </ReactLink>
      <ReactLink to="/user">
        <Button text="About You" />
      </ReactLink>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;

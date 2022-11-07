/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import DumbbellBg from "../Image/dumbbellOrange.png";
import Button from "../GlobalComponents/Button";

const LinksContainer = ({ setTraining, training }) => (
  <div css={styles} className="linksContainer">
    <button
      className={training === "Beginner" ? "active" : ""}
      onClick={() => setTraining("Beginner")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Beginner Class
    </button>
    <button
      className={training === "Immediated" ? "active" : ""}
      onClick={() => setTraining("Immediated")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Immediated Class
    </button>
    <button
      className={training === "Advanced" ? "active" : ""}
      onClick={() => setTraining("Advanced")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Advanced Class
    </button>
    {/* <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Fourth Training Class
    </button> */}
    {/* <Button text="GET US ON APPSTORE / CH PLAY" /> */}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    padding: 28px 36px;
    color: #232d39;
    font-weight: 500;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    border: none;
    outline: none;
    font-size: 20px;
    &.active {
      color: #ed563b;
    }
    img {
      margin-right: 20px;
    }
  }
  .btn {
    padding: 24px 0;
    border-radius: 4px;
  }
  @media (max-width: 900px) {
    max-width: 590px;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 280px;
  }
`;

export default LinksContainer;

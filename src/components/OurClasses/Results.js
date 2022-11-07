/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
// import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "Beginner" && (
      <Output
        title="Beginner Class"
        info="Create a personalized meal and workout plan based on daily activity and eating habits. Start 2-minute quiz. 
        Get personalized gym workout program to reach your body goal! Feel more healthy. Self-discipline."
        img={ClassOneBg}
      />
    )}

    {training === "Immediated" && (
      <Output
        title="Immediated Class"
        info="Learn Fitness online at your own pace, mprove your skills. Join millions of learners from around the world already learning on OnFit."
        img={ClassTwoBg}
      />
    )}
    {training === "Advanced" && (
      <Output
        title="Advanced Class"
        info="Packed with the best evidence-based exercise and behavior-change science, this Study Programs have everything you need to get certified and launch your career."
        img={ClassThreeBg}
      />
    )}

  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;

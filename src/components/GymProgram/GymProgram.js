/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Now you have to find your routine. That's where Basic Fitness is ready to help."
      />
      <GymProgramCard
        title="Yoga Training"
        desc=" Yoga is an ancient practice that involves physical poses, concentration, and deep breathing."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Muscle architecture and differences in the population. Changes related to athletic performance,
         age and diseases"
      />
      <GymProgramCard
        title="Body Building Course"
        desc="a regimen of exercises designed to enhance the human body's muscular development and promote general health and fitness."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;

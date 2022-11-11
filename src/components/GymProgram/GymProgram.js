/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";
import { useEffect } from "react";
import axios from "axios";
import excerciseService from "../../services/excercise.service";

const GymProgram = () => {
  // lessonsService.getLessonList()
  //   .then((res) => {
  //     const lessons = res.data;
  //     this.setState({ lessons });
  //   },
  //     (error) => {
  //       console.log("call api error: ", error);
  //     }
  //   )
  //   .catch((error) => console.log(error));

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

  // const lessonRender = (data)=>{
  //   return data.map((e, data)=>{
  //     <div key={e.excerciseID}>
  //       <div>{e.exerciseName}</div>
  //       <div>{e.bodyParts}</div>
  //       <div>{e.steps}</div>
  //       <div>{e.rep}</div>
  //     </div>
  //   }) 
  // }

  // let {lessons} = this.state;
  return (
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
        {/* {lessons && this.lessonRender(lessons)} */}
      </Container>
    </div>
  );


}

export default GymProgram;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../../assets/images/trainers/Thong.jpg";
import TrainerTwoBg from "../../assets/images/trainers/An.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      OUR PERSONAL <span>TRAINERS</span>
    </h2>
    <Icon />
    <Container>
      <TrainerCard
        title="Body Building"
        name="Hoàng Đình Thông"
        desc="In Love with Dumbbells and 2D grills"
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Body Building"
        name="Phạm Nhật An"
        desc="I don't like Gym"
        img={TrainerTwoBg}
      />
      <TrainerCard
        title="Body Building"
        name="Nguyễn Minh Quân"
        desc="To lazy for Gym, only home workout"
        img={TrainerThreeBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;

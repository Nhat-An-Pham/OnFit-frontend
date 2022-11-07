/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import getUsBg from "../Image/getUsBG.jpg";
// import ScheduleLinks from "./ScheduleLinks";
// import Table from "./Table";
import Container from "../GlobalComponents/Container";
import Storebtn from "../GlobalComponents/Storebtn";

const Schedule = () => {
  const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");

  return (
    <section css={styles} className="schedule" id="schedule">
      <h2>
        GET US <span>ON</span>
      </h2>
      <Icon />
      <Container>
        <Storebtn text="APPSTORE" />
        <Storebtn text="CH PLAY" />
      </Container>
      {/* <Container>
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </Container> */}
    </section >
  );
};



const styles = css`
  width: 100%;
  padding: 120px 0;
  // min-height: 100vh;
  text-align: center;
  background: url('${getUsBg}') no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #232441;
      text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  .container{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  @media(max-width: 640px) {
    p{
      padding: 0 30px;
      br{
        display: none;
      }
    }
    .container{
      max-width: 92%;
    }
  }
`;

export default Schedule;

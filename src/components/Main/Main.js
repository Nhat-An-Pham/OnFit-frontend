/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import NavHome from "../Navbar/NavHome";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <NavHome />
    <Info />
    <Video />
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;

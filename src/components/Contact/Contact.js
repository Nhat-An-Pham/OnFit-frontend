/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    {/* <Container>
      <Map />
      <Form />
    </Container> */}
    <footer class="footer">
      <div class='footer-wrapper'>
        <div class='footer-topic'>
          <h4>Company</h4>
          <p>Contact Us</p>
          <p>Shop</p>
        </div>
        <div class='footer-topic'>
          <h4>Social</h4>
          <p>YouTube</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div class='footer-topic'>
          <h4>Get the App</h4>
          <p>GooglePlay</p>
          <p>AppStore</p>
        </div>
      </div>
      <div class="footer-copyright">
        <div>@Copyright FPT group 5</div>
      </div>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
  }
  // footer {
  //   text-align: center;
  //   padding: 36px 0;
  //   p {
  //     font-size: 14px;
  //     color: #232d39;
  //     a {
  //       text-decoration: none;
  //       color: #ed563b;
  //       font-weight: 500;
  //       &:hover {
  //         color: #ed563b;
  //       }
  //     }
  //   }
  // }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;

import React from "react";
import styled from "styled-components";

import Image from "../img/me.jpg";

const AboutMe = () => {
  return (
    <About>
      <AboutContainer className='container'>
        <Description>
          <h3>ABOUT</h3>
          <h1>About Me</h1>
          <p>
            Saya Naftali Salsabila Kanaya Putri, 
            Seorang mahasiswa semester 5 Departemen Teknologi Informasi Institut Teknologi Sepuluh Nopember Surabaya.
          </p>
        </Description>
      </AboutContainer>
    </About>
  );
};

const About= styled.div`
  margin-top: 76px;
  /* background-color: aquamarine; */
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 40px;
    color: black;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #0d3de5;
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #0d3de5;
    padding-top: 37px;
    /* background-color: red; */
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
  }
`;

const AboutContainer = styled.div`
  background: url(${Image});
  background-size: 30%;
  background-repeat: no-repeat;
  min-height: 630px;
  /* background-color: green; */
`;

const Description = styled.div`
  width: 50%;
  margin-left: auto;
  margin-top: 40px;
  /* background-color: aliceblue; */
`;


export default AboutMe;

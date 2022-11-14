import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer className='container'>
        <div className='summary'>
        </div>
        <div className='about-us'>
          <h1>Hi! Contact Me on</h1>
          <a href='https://www.instagram.com/naftali.skp/' className='about-us-item'>
            Instagram
          </a>
          <a href='https://www.linkedin.com/in/naftaliskp/' className='about-us-item'>
            LinkedIn
          </a>
          <a href='https://mail.google.com/' className='about-us-item'>
            E-mail : naftacacakanaya@gmail.com
          </a>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #eff0f4;
  mix-blend-mode: normal;
  padding: 54px 60px 30px 60px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #608fe8;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #2f343a;
    max-width: 285px;
  }

  a {
    display: block;
    margin-bottom: 5px;
  }

`;

export default Footer;

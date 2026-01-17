import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
  return (
      <LandingPageContainer className='container'>
        <LandingDescription>
        <h1><span>That's right,</span> I'm Naftali!</h1>
          <p>
          and here is my personal website. mind to know me more?
          </p>
        </LandingDescription>
        <TypePop>
          <div className='typePop-desc'>See More</div>
          <Link to='/aboutMe'>About Me</Link>
          <Link to='/portofolio'>Portofolio</Link>
          <Link to='/blog'>Blog</Link>
        </TypePop>
      </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  margin-top: 49px;
  margin-bottom: 62px;
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    color: #1c1c1c;
    margin-bottom: 28px;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
  }
`;

const LandingDescription = styled.div`
  width: 50%;
`;

const TypePop = styled.div`
  margin-top: 11px;
  padding-bottom: 31px;
  .typePop-desc {
    font-weight: 600;
    font-size: 12px;
    line-height: 30px;
    color: #7b7b7b;
  }
  a {
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
    margin-right: 54px;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default HomeSection1;

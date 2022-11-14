import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
  return (
      <LandingPageContainer className='container'>
        <LandingDescription>
        <h1><span>That’s right,</span> I'm Naftali!</h1>
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
  /* padding-top: 41px; */
  /* background-color: aquamarine; */
`;

const SearchInputContainer = styled.div`
  padding: 19px 21px 30px 28px;
  width: 845px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(227, 230, 237, 0.58);
  border-radius: 0px 15px 15px 15px;
  display: flex;
  align-items: center;
  /* gap: 21px; */
  justify-content: space-between;
`;

const SearchBar = styled.div`
  margin-top: 38px;

  .button-list {
    display: flex;
  }

  .rumah {
    border-radius: 20px 0px 0px 0px;
  }

  .tanah {
    border-radius: 0px 20px 0px 0px;
  }

  .disabled {
    background: #eff0f4;

    color: #7b7b7b !important;
  }
`;

const SearchCategory = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  /* background-color: antiquewhite; */
  /* justify-content: space-between; */
`;

const StyledButton = styled.div`
  padding: 13px 18px;
  background: #ffffff;
  /* background: blue; */
  box-shadow: 0px -1px 4px rgba(227, 230, 237, 0.34);
  font-weight: 700;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height, or 200% */
  color: #0d3de5;
`;

const Keterangan = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1c1c;
  gap: 10px;
  margin-bottom: 9px;
`;

const StyledInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #797c86;
  /* width: 100%; */
  padding: 7px 100px 7px 11px;
  border: 1px solid #ececec;
  border-radius: 5px;

  &:focus {
    outline-color: #ececec;
  }
`;

const SearchButton = styled.div`
  background: #0d3de5;
  border-radius: 5px;
  padding: 23px 20px 24px 21px;
  display: flex;
  align-items: center;
  gap: 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const TryAdvanceSearch = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #0d3de5;
  margin-top: 37px;
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

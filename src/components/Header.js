import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const brandHandler = () => {
    navigate(`/`);
};
return (
  <StyledNav>
    <NavContainer className='container'>
      <NavbarBrand onClick={brandHandler}>naftPage</NavbarBrand>
        <StyledNavItem>
          <Link to='/aboutMe'>About Me</Link>
          <Link to='/portofolio'>Portofolio</Link>
          <Link to='/blog'>Blog</Link>
        </StyledNavItem>
      </NavContainer>
    </StyledNav>
);
};

const StyledNav = styled.div`
  padding: 26px 0px;
  background: #ffffff;
  box-shadow: 0px 20px 13px rgba(243, 244, 248, 0.45);
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #2a2829;
  cursor: pointer;
`;

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 40px;

  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
  }

  a:hover {
    text-decoration: none;
  }
`;

export default Header;

import React from "react";
import styled from "styled-components";
import portof1 from "../img/figma.jpg";
import portof2 from "../img/rdk.jpg";
import portof3 from "../img/kpu.jpg";
import portof4 from "../img/berkait.jpg";

const Portof = () => {
  return (
    <StyledTopDeals>
      <div className='container'>
        <h1>My Portofolio</h1>
        <p>
          Here is my work portofolio since i was learnt about design.
        </p>
        <ImageContainer>
          <div className='image'>
            <img src={portof1} alt='PortofImage' />
            <h4>Motive</h4>
            <h6>an application for people with disabilities looking for activities to apply their strengths</h6>
            <a href="https://www.figma.com/proto/9CSloWp4TQwWQPAauhJPv2/Motive?node-id=1%3A10&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A10" class="see-btn">See Now</a>
          </div>
          <div className='image'>
            <img src={portof2} alt='PortofImage' />
            <h4>Ramadan di Kampus (RDK) 43 ITS</h4>
            <h6>RDK events poster and Designed content to fill Manarul Ilmi Mosque Congregation's social media. </h6>
            <a href="https://drive.google.com/drive/folders/1M7cpzL2g60KM9PgNUytLfVna7E_oUBC1" class="see-btn">See Now</a>
          </div>
          <div className='image'>
            <img src={portof3} alt='PortofImage' />
            <h4>KPU HMIT</h4>
            <h6>General Elections of Information Technology Student Association (HMIT) Leader and Vice Leader</h6>
            <a href="https://drive.google.com/drive/folders/1HlbkLmu50ICYaseyeVu_PP7NWXsrP1Nn?usp=sharing" class="see-btn">See Now</a>
          </div>
          <div className='image'>
            <img src={portof4} alt='PortofImage' />
            <h4>BerkaiIT HMIT</h4>
            <h6>BerkaIT is a project to collect donations and give to those in need during the month of Ramadan.</h6>
            <a href="https://drive.google.com/drive/folders/11lPRTk_HQdUE3BXEPVd1KxKuKrobSqCF" class="see-btn">See Now</a>
          </div>
        </ImageContainer>
      </div>
    </StyledTopDeals>
  );
};

const StyledTopDeals = styled.div`
  text-align: center;
  margin-top: 74px;
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: black;
    margin-bottom: 11px;
  }

  p {
    width: 50%;
    margin: 0 auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
    text-align: center;
    margin-bottom: 31px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  img {
    width: 100%;
  }
  margin-bottom: 90px;
`;

export default Portof;

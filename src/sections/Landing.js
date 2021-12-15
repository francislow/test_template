import React from "react";
import styled from "styled-components";
import colors from "../configs/colors";

function Landing({ name, headline }) {
  return (
    <Wrapper>
      <IntroHeader>
        Hello, I’m <NameText>{name ? `${name}` : 'YOUR NAME'}</NameText>
      </IntroHeader>
      <Headline>{headline ? headline : "HEADLINE"}</Headline>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.yellow};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IntroHeader = styled.p`
  color: white;
  font-size: 55px;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 35px;
  }
`;

const NameText = styled.span`
  color: ${colors.darker_grey};
  font-size: 70px;

  @media only screen and (max-width: 600px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 48px;
  }
`;

const Headline = styled.span`
  text-align: center;
  padding: 0 40px;
  color: white;
  margin-top: 10px;
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export default Landing;

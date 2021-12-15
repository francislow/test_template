import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiChevronDoubleUp } from "react-icons/hi";
import colors from "../configs/colors";

function Footer({ instaUrl, githubUrl, linkedinUrl, email }) {
  function onScrollToTopBtnTap() {
    window.scrollTo(0, 0);
  }

  return (
    <Wrapper>
      <ScrollUpButton onClick={onScrollToTopBtnTap}>
        <HiChevronDoubleUp />
      </ScrollUpButton>
      <FooterTitle>Find me on the internet</FooterTitle>
      <LineDeco />
      <LinksWrapper>
        {instaUrl ?
          <a target="_blank" rel="noopener noreferrer" href={instaUrl}>
            <AiOutlineInstagram />
          </a> : <></>
        }
        {githubUrl ?
          <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
            <AiFillGithub />
          </a> : <></>
        }
        {linkedinUrl ?
          <a target="_blank" rel="noopener noreferrer" href={linkedinUrl}>
            <FaLinkedinIn />
          </a> : <></>
        }
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${email ? email : ""}`}
        >
          <FiMail />
        </a>
      </LinksWrapper>

      <AdText>Made with Chalksites</AdText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.darker_grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScrollUpButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${colors.white};
  font-size: 30px;
  color: black;
  margin-bottom: 10px;

  position: relative;
  top: -25px;

  transition: all 0.2s;

  &:hover {
    background-color: ${colors.lighter_grey};
  }
`;

const FooterTitle = styled.p`
  font-size: 16px;
  color: ${colors.white};
`;

const LineDeco = styled.div`
  width: 60px;
  border-top: white solid 2px;
  margin-top: 25px;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;

  a {
    border-radius: 99px;
    padding: 10px;
    font-size: 25px;
    color: black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: rgb(202, 202, 202);
    }

    @media only screen and (max-width: 1000px) {
      margin: 0 10px;
      font-size: 25px;
    }

    @media only screen and (max-width: 700px) {
      margin: 0 8px;
      font-size: 20px;
    }
  }
`;

const AdText = styled.p`
  color: white;
  margin-top: 35px;
  padding-bottom: 40px;
  font-size: 11px;
`;

export default Footer;

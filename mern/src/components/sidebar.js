import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Div,
  FlexContainer,
  H4,
  Button,
  Social_Button,
} from "./shared/components";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SideDiv = styled(Div)`
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75vw;
  background-color: var(--grey-txt);
  /*color: var(--grey-bg);*/
  z-index: 100;
  transition: all 0.3s linear;
  transform: ${(props) => props.translate || "translate(-100%)"};

  @media screen and (min-width: 676px) {
    width: 350px;
  }
`;

export default function Sidebar() {
  const { homePath, sideBar, setSideBar } = useGlobalContext();
  return (
    <SideDiv translate={`${sideBar ? "translate(0)" : "translate(-100%)"}`}>
      <FlexContainer height="15vh">
        <Button
          style={{ "font-size": "25px" }}
          color="var(--grey-bg)"
          bgColor="var(--grey-txt)"
          width="40px"
          height="40px"
          radius="50%"
          padding="0.3rem 0 0"
          onClick={() => setSideBar(false)}
        >
          <HiChevronDoubleLeft />
        </Button>
      </FlexContainer>

      <FlexContainer height="70vh" padding="0">
        <SideLink con={setSideBar} link={homePath} linkName="خانه" />
        <SideLink con={setSideBar} link="/courses/reactJS" linkName="دسته بندی ها" />
        <SideLink con={setSideBar} link="/about" linkName="درباره" />
        <SideLink con={setSideBar} link="/contact" linkName="تماس" />
      </FlexContainer>

      <FlexContainer height="15vh" direction="row">
        <a href='https://twitter.com/mamad_coder' target="_blank">
        <Social_Button margin="0 0.8rem" fontSize="1.1rem" 
        width="30px"
        height="30px"
        padding="0.3rem 0 0">
          <FaTwitter />
        </Social_Button>
        </a>
        <Social_Button margin="0 0.8rem" fontSize="1.1rem"
                width="30px"
        height="30px"
        padding="0.3rem 0 0">
          <FaInstagram />
        </Social_Button>
        <Social_Button margin="0 0.8rem" fontSize="1.1rem"
                width="30px"
        height="30px"
        padding="0.3rem 0 0">
          <FaFacebook />
        </Social_Button>
      </FlexContainer>
    </SideDiv>
  );
}

const SideLink = ({ con,link, linkName }) => {
  const LiItem = styled(Div)`
  margin:0;
  width:100%;
  padding: 1rem 0;
  transition: all 0.3s linear;
  :hover{
    background-Color:var(--grey-bg);
    H4{
      color:var(--grey-txt);

    }
  }
  `;
  return (
    <LiItem onClick={() => con(false)}>
      <Link to={link} style={{ "text-decoration": "none" }}>
        <H4 color="var(--grey-bg)">{linkName}</H4>
      </Link>
    </LiItem>
  );
};

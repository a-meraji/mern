import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FlexContainer, H4, Social_Button, P,A } from "./shared/components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const Footer_Wrapper = styled(FlexContainer)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--footer-height); /* Height of the footer */
  padding: 10px 0 0;
  background: var(--grey-txt);
  text-align: center;
`;

export default function Footer() {
  return (
    <Footer_Wrapper direction="column">
      <FlexContainer width="100vw" direction="row" justify="space-between">
      <Link to={process.env.PUBLIC_URL + '/'} style={{"text-decoration":"none"}}>
        <H4 margin="0 2rem" color="var(--grey-bg)">
          MERN
        </H4>
        </Link>
        <FlexContainer margin="0 2rem" direction="row" justify="center">
          <a target='_blank' href='https://twitter.com/mamad_coder'>
          <Social_Button
            fontSize="1.1rem"
            width="30px"
            height="30px"
            padding="0.3rem 0 0"
          >
            <FaTwitter />
          </Social_Button>
          </a>
          <Social_Button
            fontSize="1.1rem"
            width="30px"
            height="30px"
            padding="0.3rem 0 0"
          >
            <FaInstagram />
          </Social_Button>
          <Social_Button
            fontSize="1.1rem"
            width="30px"
            height="30px"
            padding="0.3rem 0 0"
          >
            <FaFacebook />
          </Social_Button>
        </FlexContainer>
      </FlexContainer>
      <P
        color="var(--grey-bg)"
        margin="0.4rem 0 0"
        style={{ "font-size": "0.8rem" }}
      >
        {'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
        <FaRegCopyright />
        {new Date().getFullYear()}
        {'\xa0\xa0\xa0'}
        mern
        {'\xa0\xa0\xa0'}
        <A target='_blank' href='https://twitter.com/mamad_coder' color="var(--grey-bg)">@amin_meraji</A>
      </P>
    </Footer_Wrapper>
  );
}

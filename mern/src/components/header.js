import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./sidebar";
import { CgDetailsLess, CgUser } from "react-icons/cg";
import { Button, Wrapper, H2 } from "./shared/components";

const Header_wrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  z-index: 10;
`;
const Logo = styled(H2)`
  text-shadow: 0 0 2px #555, 0 0 5px #fff;
`;
const Header = () => {
  const { homePath, setSideBar, isAuth, checkAuth } = useGlobalContext();
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory();

  const handleScrolling = () => {
    if (window.scrollY >= 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScrolling);

  const logOut =  async() => {
    try {
      const res = await fetch(process.env.REACT_APP_LOGOUT);
      const data = await res.json();
      if(data.logout){
        const con = await checkAuth();
        if(!con){
          history.push(homePath);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Header_wrapper style={{ position: scrolled ? "relative" : "fixed" }}>
      <Button
        onClick={() => {
          setSideBar(true);
        }}
        style={{ "font-size": "20px" }}
      >
        <CgDetailsLess />
      </Button>
      <Link to={homePath} style={{ "text-decoration": "none" }}>
        <Logo>MERN</Logo>
      </Link>
      {isAuth ? (
        <Button onClick={logOut}>خروج</Button>
      ) : (
        <Link to="/auth">
          <Button style={{ "font-size": "20px" }}>
            <CgUser />
          </Button>
        </Link>
      )}
      <Sidebar />
    </Header_wrapper>
  );
};
export default Header;

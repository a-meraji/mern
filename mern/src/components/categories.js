import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import categories from "../data";
import styled from "styled-components";
import {
  Div,
  FlexContainer,
  Circle_Img,
  Button,
  FaP,
} from "./shared/components";
import { BsArrowDownLeft } from "react-icons/bs";

const CatDiv = styled(Div)`
  margin-top: 5rem;
  background-color: var(--grey-bg);
  min-width: 100%;
`;

const Overlay = styled(Div)`
  background-color: ${(props) => props.bgColor || "transparent"};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
`;

const Modal = styled(Div)`
  position: absolute;
  width: 150px;
  height: auto;
  padding: 0 0.4rem;
  margin-top: 1rem;
  margin-right: 3.5rem;
  border: 1px dashed var(--grey-txt);
  color: var(--grey-txt);
  right: 0;
  top: 0;
  font-size:0.8rem;
  @media only screen and (max-width: 660px){
    margin-right: -10px;
  }
  @media only screen and (max-width: 520px) {
    width: 100px;
    margin-right: -30px;
    font-size:0.7rem;
  }
`;

const initialCourse = [
  {
    id: 3,
    name: "reactJS",
    img: " ./assets/images/react-logo.jpg",
    color: "var(--react-blue)",
  },
];

export default function Categories() {
  const { cat: nameParam } = useParams();
  const [course, setCourse] = useState(initialCourse);
  const [modal, setModal] = useState(true);
  const [closeModal, setCloseModal] = useState(false);
  const { setCatColor } = useGlobalContext();

  useEffect(() => {
    if (nameParam) {
      setCourse(categories.filter((item) => item["cat"] === nameParam));
      setCatColor(
        categories.filter((item) => item["cat"] === nameParam)[0]["color"]
      );
    }
  }, [nameParam]);

  useEffect(() => {
    let interval = null;
    if (!closeModal) {
      interval = setInterval(
        () => {
          setModal(!modal);
        },
        modal ? 1000 : 400
      );
    } else if (closeModal) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [modal]);

  function Closer() {
    setCloseModal(true);
    setTimeout(() => {
      console.log(modal);
    }, 500);
  }

  return (
    <CatDiv>
      <FlexContainer
        width="100%"
        margin="2rem auto"
        style={{ position: "relative" }}
      >
        {modal ? (
          <Modal>
            <FaP>سرفصل را عوض کنید</FaP>
            <Button style={{"width":"100%","direction":"rtl","position":"absolute","top":"60%","right":"50%","left":"0"}} onClick={() => Closer()}>
            <span>&times;</span> باشه فهمیدم
              </Button>
            <BsArrowDownLeft />
          </Modal>
        ) : (
          ""
        )}

        <Circle_Img
          width="5rem"
          height="5rem"
          src={course[0]["img"]}
          alt={course[0]["name"]}
        />
        <FlexContainer direction="row" margin=" 1rem 0" align="baseline">
          {categories.map((item) => {
            const { cat, img } = item;
            return (
              <Div margin="0 0.7rem" style={{ position: "relative" }}>
                <Link to={`/courses/${cat}`}>
                  <Circle_Img
                    id={`catImg${cat}`}
                    style={{ position: "relative" }}
                    width={`${cat === nameParam ? "1.3rem" : "1.85rem"}`}
                    height={`${cat === nameParam ? "1.3rem" : "1.85rem"}`}
                    src={img}
                    alt={cat}
                  />
                  <Overlay
                    width={`${cat === nameParam ? "1.35rem" : "1.85rem"}`}
                    height={`${cat === nameParam ? "1.35rem" : "1.85rem"}`}
                    bgColor={`${
                      cat === nameParam ? "rgba(0,0,0,0.7)" : "transparent"
                    }`}
                  />
                </Link>
              </Div>
            );
          })}
        </FlexContainer>
      </FlexContainer>
    </CatDiv>
  );
}

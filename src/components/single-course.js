import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Div, H2, FaP, Button } from "./shared/components";
const CourseDiv = styled(Div)`
  position: relative;
  border-width: 2px;
  width: 100%;
  border-color: ${(props) => props.borderColor || "var(--mongo-green)"};
  border-style: ${(props) => props.border || "none"};
`;
const CourseHeader = styled(H2)`
  direction: rtl;
  text-align: ${(props) => props.textAlign || "center"};
`;
const CourseButton = styled(Button)`
    width:100px;
    bgColor:${(props) => props.color};
    padding:0.5rem;
    margin:0.7rem 0 0;
    float: ${(props) => props.float};
    font-size:1rem;
`;
const Number = styled.div`
  position: absolute;
  text-align: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  top: 50%;
  bottom: 50%;
  left: ${(props) => props.left || "0"};
  right: ${(props) => props.right || "0"};
  background-color: ${(props) => props.bgColor};
  color: var(--grey-txt);
`;

export default function SingleCourse({ item, index }) {
  const { id, name, description } = item;
  const { catColor } = useGlobalContext();
  const {cat: catParam} = useParams();

  return (
    <CourseDiv
      id={id}
      padding="1rem"
      borderColor={catColor}
      border={`${
        index % 2 === 0 ? "none dashed dashed none" : "none none dashed dashed"
      }`}
    >
      <CourseHeader
        textAlign={`${index % 2 === 0 ? "right" : "left"}`}
        color={catColor}
      >
        {name}
      </CourseHeader>
      <FaP
        style={{ "line-height": "1.7"}}
        size="1.1rem"
        textAlign="right"
        textAlign={`${index % 2 === 0 ? "right" : "left"}`}
      >
        {description}
      </FaP>
      <Link to={`/${catParam}/download/${id}`}>
      <CourseButton
        bgColor={catColor}
        color="var(--grey-txt)"
        float={`${index % 2 === 0 ? "right" : "left"}`}
      >
        {`دانلود پکیج ${index+1}`}
      </CourseButton>
      </Link>
      <Number
        bgColor={catColor}
        left={`${index % 2 === 0 ? "100%" : "1"}`}
        right={`${index % 2 === 0 ? "1" : "100%"}`}
      >
        {index + 1}
      </Number>
    </CourseDiv>
  );
}

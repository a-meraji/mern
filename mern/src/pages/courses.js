import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/categories";
import SingleCourse from "../components/single-course";
import { allCourses } from "../data";
import { Wrapper, FlexContainer } from "../components/shared/components";
import { ScrollContainer } from "react-scroll-motion";

export default function Courses() {
  const { cat: nameParams } = useParams();
  const [course, setCourse] = useState(allCourses['2']['reactJS']);

  useEffect(() => {
    getCourse(nameParams);
  }, [nameParams]);

  const getCourse = (cat) => {
    var inx = 0;
    switch (cat) {
      case "mongoDB":
        inx = 0;
        break;
      case "express":
        inx = 1;
        break;
      case "reactJS":
        inx = 2;
        break;
      case "nodeJS":
        inx = 3;
        break;
    }
    setCourse(allCourses[`${inx}`][`${cat}`]);
  };
  return (
    <ScrollContainer>
      <Wrapper
        margin="0 auto 3rem"
        width="80vw"
        style={{ "max-width": "700px" }}
      >
        <Categories />
        <FlexContainer margin="1rem 0.5rem">
          {course.map((item, index) => {
            return <SingleCourse item={item} index={index} />;
          })}
        </FlexContainer>
      </Wrapper>
    </ScrollContainer>
  );
}

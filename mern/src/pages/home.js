import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import Hero1 from "../components/hero1";
import StackInfo from "../components/stack-info";
import {
  Wrapper,
  FlexContainer,
  Button,
  FaP,
  Circle_Img,
} from "../components/shared/components";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { Motion, spring } from "react-motion";

function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const [fly, setFly] = useState(false);
  let history = useHistory();

  const timer = () => {
    setFly(true);
    setTimeout(() => {
      history.push("/courses/reactJS");
    }, 450);
  };

  return (
    <ScrollContainer >
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Hero1 />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <Wrapper
            margin="3rem 0 0"
            padding="auto"
            width="60vw"
            style={{ "max-width": "600px" }}
          >
            <FaP size="1.25rem" style={{ "max-width": "600px" }}>
              توسعه MERN به زبان ساده یعنی استفاده از JavaScript از فرانت اند تا
              بک اند با استفاده از
              <br />
              <span style={{ color: "var(--mongo-green)" }}>M</span>ongoDB,{" "}
              <span style={{ color: "var(--express-pink)" }}>E</span>xpressJS,{" "}
              <span style={{ color: "var(--react-blue)" }}>R</span>eactJS,{" "}
              <span style={{ color: "var(--node-green)" }}>N</span>odeJS
              <br />
              وبسایت های تولید شده با این فناوری سریع اند چرا که کد منبع
              را تنها یک بار از سرور واکشی می‌کنند.
              <br />
              اگر میخواهید یک توسعه دهنده MERN Stack باشید،<br/> به سایت ما خیلی خوش اومدید!
            </FaP>
          </Wrapper>
        </Animator>
      </ScrollPage>

      <StackInfo />

      <ScrollPage page={6}>
        <Animator animation={batch(FadeIn(), Sticky())}>
          <FlexContainer>
            <Motion
              defaultStyle={{ y: 0 }}
              style={{
                y: spring(fly ? -1000 : 0, {
                  stiffness: 60,
                }),
              }}
            >
              {(value) => (
                <Circle_Img
                  width="5rem"
                  height="auto"
                  borderRadius="0"
                  margin="1rem 0"
                  src="./assets/images/shuttle.png"
                  alt="shuttle"
                  style={{ transform: `translateY(${value.y}px)` }}
                ></Circle_Img>
              )}
            </Motion>
            <Button
              onClick={timer}
              bgColor="var(--grey-txt)"
              color="var(--grey-bg)"
              width="10rem"
              padding="0.5rem 1rem"
              border="1px solid var(--grey-txt)"
              style={{"font-size":"1rem"}}
            >
              شروع آموزش
            </Button>
          </FlexContainer>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default Home;

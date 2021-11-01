import React from "react";
import {
  Wrapper,
  LogDiv,
  Div,
  P,
  Button,
  H2,
} from "../components/shared/components";

export default function Contact() {
  return (
    <>
      <Wrapper margin="6rem 0 5rem">
        <Div margin="3rem 0">
          <H2>تماس با ما</H2> 
          </Div>

        <form>
          <LogDiv>
              <div>
            <label for="fname">نام</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder=".. نام شما"
            />
            <label for="lname">نام خانوادگی</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder=".. نام خانوادگی شما"
            />
            <label for="subject">موضوع</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="... پیامتان را بنویسید"
              style={{ "height": "170px","border-radius":"8px" }}
            ></textarea>
            </div>
            <Button
          bgColor="var(--grey-txt)"
          color="var(--grey-bg)"
          width="max-content"
          padding="0.8rem 1.5rem"
          margin="1rem"
          border="1px solid var(--grey-txt)"
        >
          ثبت
        </Button>
          </LogDiv>
        </form>
      </Wrapper>
    </>
  );
}

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const fields =document.getElementsByClassName('contact-field');
    console.log(fields[0].value)
    for(var i = 0; i < fields.length; i++){
      fields[i].value='';
    }
    alert('با سپاس پیام شما با موفقیت ثبت شد')}
  return (
    <>
      <Wrapper margin="6rem 0 5rem">
        <Div margin="3rem 0">
          <H2>تماس با ما</H2> 
          </Div>

        <form onSubmit={handleSubmit}>
          <LogDiv>
              <div>
            <label for="fname">نام</label>
            <input
            className='contact-field'
              type="text"
              id="fname"
              name="fname"
              placeholder=".. نام شما"
            />
            <label for="lname">نام خانوادگی</label>
            <input
            className='contact-field'
              type="text"
              id="lname"
              name="lname"
              placeholder=".. نام خانوادگی شما"
            />
            <label for="subject">موضوع</label>
            <textarea
            className='contact-field'
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

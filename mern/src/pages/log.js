import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  Div,
  LogDiv,
  FlexContainer,
  H1,
  Button,
} from "../components/shared/components";

export default function Log() {
  const { homePath, checkAuth } = useGlobalContext();
  const [ URI, setURI ] = useState('/login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    //reset errors
    passwordError.textContent = "";
    emailError.textContent = "";

    try {
      const res = await fetch(URI, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.errors) {
        emailError.textContent = data.errors.email;
        passwordError.textContent = data.errors.password;
      }
      if (data.user) {
        checkAuth();
        if (history.location.state) {
          history.push(history.location.state.from.pathname);
        } else {
          history.push(homePath);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper margin="10rem 0 4rem">
          <H1 margin='0 0 3rem'>{URI === '/signup'?
          "ثبت نام":"ورود"}</H1>
      <form onSubmit={submitHandler}>
        <LogDiv>
          <div>
            <label for="email">
              <b>نام کاربری</b>
            </label>
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            style={{ "text-align": "right" }}
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            name="email"
            id="email"
            required
          />
          <div class="email error"></div>
          <div>
            <label for="password">
              <b>رمز</b>
            </label>
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            style={{ "text-align": "right" }}
            type="password"
            placeholder=" رمز خود را وارد کنید"
            name="password"
            id="password"
            required
          />
          <div class="password error"></div>
        <Div>
          <Button
            color="var(--grey-txt)"
            bgColor='var(--grey-bg)'
            width="max-content"
            padding="0.5rem 0.85rem"
            margin="-1rem -1rem 1rem 0"
            notHover
            onClick={() => {
              if (URI === '/signup'){
                setURI('/login');
              }
              else {
                setURI('/signup');
              }
            }}
            >
            {URI === '/signup'
              ? "قبلا حساب ایجاد کردم"
              : "ایجاد حساب کاربری"}
          </Button>
          <Button
            bgColor="var(--grey-txt)"
            color="var(--grey-bg)"
            width="100%"
            padding="0.5rem 0"
            margin="1rem -1rem 0 0"
            border="1px solid var(--grey-txt)"
            style={{"max-width": "600px", "text-align":"center"}}
            >
            ورود
          </Button>
        </Div>
        </LogDiv>
      </form>
    </Wrapper>
  );
}

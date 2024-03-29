import React from "react";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  LogDiv,
  FlexContainer,
  Button,
} from "../components/shared/components";


export default function Log() {
  const { LogIn, LogOut } = useGlobalContext();
  const history = useHistory();

  return (
    <Wrapper margin="10rem 0 4rem">
      <LogDiv>
        <div>
          <label for="uname">
            <b>نام کاربری</b>
          </label>
        </div>
        <input
          style={{ "text-align": "right" }}
          type="text"
          placeholder="نام کاربری را وارد کنید"
          name="uname"
          required
        />
        <div>
          <label for="uname">
            <b>رمز</b>
          </label>
        </div>
        <input
          style={{ "text-align": "right" }}
          type="password"
          placeholder=" رمز خود را وارد کنید"
          name="uname"
          required
        />
      </LogDiv>
      <FlexContainer direction="row">
        <Button
          bgColor="var(--grey-txt)"
          color="var(--grey-bg)"
          width="max-content"
          padding="0.5rem 0.85rem"
          margin="1rem 1rem 1rem 0"
          border="1px solid var(--grey-txt)"
          onClick={() => {
            LogIn();
            if (history.location.state) {
              history.push(history.location.state.from.pathname);
            } else {
              history.push("/");
            }
          }}
        >
          ورود
        </Button>
        <Button
          bgColor="var(--grey-txt)"
          color="var(--grey-bg)"
          width="max-content"
          padding="0.5rem 0.85rem"
          margin="1rem 1rem 1rem 0"
          border="1px solid var(--grey-txt)"
          onClick={LogOut}
        >
          خروج
        </Button>
      </FlexContainer>
    </Wrapper>
  );
}
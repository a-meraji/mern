import React from "react";
import { Motion, spring} from "react-motion";
import styled from "styled-components";
import { Wrapper, Circle_Img, H2, FlexContainer } from "./shared/components";
import categories from "../data";

const Letter = styled(H2)`
  color: ${(props) => props.color};
  text-transform: uppercase;
  margin-top: 0.5rem;
`;

const FlexItem = styled(FlexContainer)`
  margin: 0 0.5rem;
`;
export default function Hero1() {
  return (
    <Wrapper>
    <FlexContainer direction="row">
      {categories.map((item, index) => {
        const { cat, img, color } = item;
        return (
          <Motion
            defaultStyle={{x: 400+(index*100), opacity: 0}}
            style={{
              x: spring(0,{ stiffness: 17-(index*2), damping: 5 }),
              opacity: spring(1)
            }}>
              {value => (
          <FlexItem
          style={{transform: `translateX(${value.x}px)`,
          opacity: value.opacity}}>
            <Circle_Img
              width="14vw"
              height="14vw"
              src={img}
              alt={cat}
              style={{"max-width":"180px","max-height":"180px"}}
            ></Circle_Img>
            <Letter color={color}>{cat[0]}</Letter>
          </FlexItem>
              )}
          </Motion>
        );
      })}
    </FlexContainer>
          </Wrapper>
  );
}

import styled from "styled-components";
// containers
export const Wrapper = styled.div`
    padding: ${(props) => props.padding || "0 1.5rem"};
    margin:${(props) => props.margin || "0"};
    width: ${(props) => props.width || "auto"};
    height:${(props) => props.height || "auto"};
    @media only screen and (min-width:768px) {
        .container{
          padding: 0 2rem;
        }
`;
export const Div = styled.div`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;
export const FlexContainer = styled(Div)`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
`;

//buttons
export const Button = styled.button`
  color: ${(props) => props.color || "var(--grey-txt)"};
  background-color: ${(props) => props.bgColor || "transparent"};
  border: ${(props) => props.border || "hidden"};
  border-radius: ${(props) => props.radius || "15px"};
  padding: ${(props) => props.padding || "0"};
  height: ${(props) => props.height || "min-content"};
  width: ${(props) => props.width || "min-content"};
  margin: ${(props) => props.margin || "0"};
  cursor: pointer;
  transition: var(--mainTransition);
  :hover{
    color:${props=> props.bgColor || "auto"};
    background-color:${props=> props.color || "auto"};
    border:${props=> props.border || "hidden"};
  }
`;
export const Social_Button = styled(Button)`
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin || "0 0 0 0.7rem"};
  color: var(--grey-bg);
  radius: 50%;
  :hover{
    background-color:var(--grey-bg);
    color:var(--grey-txt);
  }
`;
// text
export const H1 = styled.h1`
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "auto"};
  direction: ${(props) => props.direction || "ltr"};
`;
export const H2 = styled.h2`
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "auto"};
  direction: ${(props) => props.direction || "ltr"};
`;
export const H3 = styled.h3`
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "auto"};
  direction: ${(props) => props.direction || "ltr"};
`;
export const H4 = styled.h4`
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "auto"};
  direction: ${(props) => props.direction || "ltr"};
`;
export const H5 = styled.h5`
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "auto"};
  direction: ${(props) => props.direction || "ltr"};
`;
export const H6 = styled.h6`
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.color || "auto"};
  direction: ${(props) => props.direction || "ltr"};
`;
export const P = styled.p`
  color: ${(props) => props.color || "var(--grey-txt)"};
  text-align: ${(props) => props.textAlign || "center"};
  padding: ${(props) => props.padding || "0.5rem 0"};
  margin: ${(props) => props.margin || "0"};
`;
export default P;
export const FaP = styled(P)`
  direction: ${(props) => props.direction || "rtl"};
  font-size:${props => props.size || "auto"};
`;
export const A = styled.a`
  color: ${(props) => props.color || "var(--grey-txt)"};
  text-decoration: none;
`;

// image
export const Circle_Img = styled.img`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  object-fit: cover;
  border-radius: ${(props) => props.borderRadius || "50%"};
  margin: ${(props) => props.margin || "0"};
`;

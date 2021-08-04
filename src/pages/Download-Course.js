import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import jsPDF from "jspdf";
import { Wrapper,Div, FlexContainer,H1,H3, A, FaP ,Button } from "../components/shared/components";

const makeFile = (title, cat) => {
  var address = " /assets/images/nodelogo.jpg";
  switch (cat) {
    case "mongoDB":
      address = "/assets/images/mongologo.jpg";
      break;
    case "express":
      address = "/assets/images/Ex.jpg";
      break;
    case "reactJS":
      address = "/assets/images/react-logo.jpg";
      break;
    case "nodeJS":
      address = " /assets/images/nodelogo.jpg";
      break;

    default:
      break;
  }

  var doc = new jsPDF();
  doc.setFontSize(40);
  doc.text(35, 25, title);
  doc.addImage(address, "JPEG", 15, 40, 180, 160);
  doc.save(`${title}.pdf`);
};

export default function Download_Course() {
  const { cat, id } = useParams();
  const { catColor } = useGlobalContext();

  return (
    <Wrapper margin="5rem auto">
      <H1 margin="1rem 0">{cat}</H1>
      <H3>Course {id}</H3>
      <Div margin="2.5rem 3rem 1rem">
      <FaP
      size="1.1rem">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </FaP>
      </Div>
      <FlexContainer direction="row" margin="4rem 0">
      <Button
        width="max-content"
        margin="0.5rem 0.5rem 0.5rem 0"
        padding="0.5rem 0.85rem"
        bgColor={catColor}
        onClick={() => makeFile(id, cat)}
      >
        download pdf
      </Button>
      <Button
      width="max-content"
      margin="0.5rem"
      padding="0.5rem 0.85rem"
      bgColor={catColor}>
        <A
          target="_blank"
          href="http://localhost:8080/dls/?section=video&file=sample_640x360.mkv"
          download
        >
          download video
        </A>
        </Button>
      </FlexContainer>
    </Wrapper>
  );
}

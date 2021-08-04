import React from "react";
import styled from "styled-components";
import { FlexContainer, H2, FaP, Circle_Img } from "./shared/components";
import categories from "../data";
import {ScrollPage,batch, Animator, MoveIn, FadeIn} from "react-scroll-motion";

const descriptions = [
  `mongo db یکی از قوی ترین و محبوب ترین دیتابیس های NoSQL
   است. دیتابیس مونگو دیبی 
   متن باز و رایگان است. داده ها در 
  این دیتابیس به صورت key و value ذخیره می شوند.
  و ظاهر آن شباهت زیادی به JSON دارد.`,

  `Express.js یک وب فریم ورک برای محیط اجرایی Node.js است.
   به کمک این فریم ورک می‌توانید وب اپلیکیشن یا API
   های گوناگون طراحی کنید. اکسپرس جی اس بسیار
    سبک بوده و امکانات آن در قالب پلاگین‌ها ارائه می‌شود.`,

  `React یک کتابخونه برای ساخت رابط کاربری است. 
    با ری اکت میتوانید وب اپلیکشن هایی طراحی کنید که تنها یک بار برای
     لود شدن صفحه از سرور، زمان نیاز دارد.
     همچنین React این امکان رو در اختیار ما میذاره که
     رابط کاربری را به کامپوننت های ریز تر تقسیم کنیم
     به طوری که قابل استفاده مجدد باشد.
     `,

  `جاوااسکریپت در مرورگرها اجرا می‌شود
     اما برای اجرای کد بک-اند مرورگر نداریم! اینجاست که NodeJS 
     وارد عمل می‌شود و محیطی را ایجاد میکند که JavaScript بتواند در آنجا اجرا شود و ما را قادر می‌سازد
     تا کد جاوااسکریپتی را در سرورهای بک-اند اجرا کنیم .`,
];

const InfoWrapper = styled(FlexContainer)`
padding: '2.5rem 1.5rem';
background-color: ${(props) => props.bgColor || "transparent"};
width: 100%;
height:100vh;
@media only screen and (min-width:768px) {
  .container{
    padding:3rem 2rem;
  }
  .pCont{max-width: 550px;}
`;
const InfoH2 = styled(H2)`
  color: white;
  margin: 1rem 0;
`;
export default function StackInfo() {
  return (
    <>
      {categories.map((item, index) => {
        const { name, img, color } = item;
        var anim = null;
        
        switch (index) {
          case 0:
            anim = batch( MoveIn(-1000,0), FadeIn());
            break;
          case 1:
            anim = batch( MoveIn(1000,0), FadeIn());
            break;
          case 2:
            anim = batch( MoveIn(-1000,0), FadeIn());
            break;
          case 3:
            anim = batch( MoveIn(1000,0), FadeIn());
            break;
          default:
            break;
        }
        return (
          <ScrollPage page={index+2}>
          <Animator animation={anim}>
            <InfoWrapper bgColor={color}>
              <Circle_Img
                width="7rem"
                height="7rem"
                src={img}
                alt={name}
              ></Circle_Img>
              <InfoH2>{name}</InfoH2>
              <FaP
                className="pCont"
                padding="1rem 3rem 0"
                color="var(--grey-txt)"
                size="1.1rem"
              >
                ‌{descriptions[index]}
              </FaP>
            </InfoWrapper>
          </Animator>
          </ScrollPage>
        );
      })}
    </>
  );
}

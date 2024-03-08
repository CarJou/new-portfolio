"use client";
import Image from "next/image";
import styled from "styled-components";
import Tab from "../Tab/TabComponent";
import AboutComponent from "../AboutMe/AboutComponent";
import FooterComponent from "../Footer/Footer";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 6rem;
  padding-bottom: 0;
  @media only screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      padding-bottom: 0;

  }
`;

const StyledWrapperContent = styled.div`width: 70%;   
@media only screen and (max-width: 1000px) {
width: auto;}  ;`
const StyledWrapperImage = styled.div`  `


const HomeComponent = () => {
  return (
    <>
      <StyledWrapper>
        <StyledWrapperContent>
          <AboutComponent /></StyledWrapperContent>
        <StyledWrapperImage>
          <Image src="/photo.svg"
            alt="Photo"
            priority
            layout="responsive"
            width={300}
            height={300} />
            </StyledWrapperImage>
      </StyledWrapper>
      <Tab />
      <FooterComponent/>
    </>
  );
};
export default HomeComponent;

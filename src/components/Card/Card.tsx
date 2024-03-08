"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  url: string;
}

const StyledWrapper = styled.div`
 width: auto;
  border-radius: 10px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
justify-content: flex-start
  align-items: flex-start;
  padding: 25px;
  gap: 10px;
  transition: all 0.1s ease;

`;

const StyledTextContent = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
text-align: start;`;

const StyledTitle = styled.h1`
  color: #252B33;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledSubtitle = styled.h2`
  color: #252B33;
  font-weight: 400;
  font-size: 16px;
`;
const StyledImage = styled.div``;

const StyledButton = styled.h1`
font-size: 16px;
  color: #793296;
  margin-top: 15px;
  cursor: pointer;
  font-weight: 800;
  border: 2px solid transparent;
  transition: all 0.5s ease;
border-radius: 5px;
padding: 4px 0px;
  &:hover {
    font-weight: 900;
    text-decoration: underline;
  }
`;
 
const Card = ({ title, subtitle, imageUrl, buttonText, url }: Props) => {

  return (
    <StyledWrapper>
      <StyledImage>
        <Image src={imageUrl} alt={title} layout="responsive"
          width={200} height={200} style={{ borderRadius: '10px', alignItems: 'center' }} />
      </StyledImage>
      <StyledTextContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <Link href={url} passHref target="_blank">
          <StyledButton>{buttonText}</StyledButton>
        </Link>
        </StyledTextContent>  
        </StyledWrapper>
  );
};

export default Card;

"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledWrapper = styled.div`
display: flex;
margin-top: 50px;
justify-content: space-evenly;
background: rgba(15, 82, 78, 0.06);
padding: 20px 0;
@media only screen and (max-width: 1000px) {
    margin-top: 0px;
}`;

const StyledButton = styled.button`    
display: flex;
flex-direction: column;
align-items: center;
background: transparent;
color: #0F524E;
cursor: pointer;
border: none;
gap: 2px;
transition: all 0.5s ease;

&:hover{ transform: scale(1.1);}
`;

const FooterComponent = () => {
    return (
        <StyledWrapper>
            <Link href={'https://www.linkedin.com/in/carla-joumier/'} passHref target="_blank">
                <StyledButton><Image src={'/linkedin.svg'} width={30} height={30} alt={'Linkedin'} />Linkedin</StyledButton>
            </Link>
            <Link href={'https://www.behance.net/carlajoumier'} passHref target="_blank">
                <StyledButton><Image src={'/behance.svg'} width={30} height={30} alt={'Behance'} />Behance</StyledButton>
            </Link>
            <Link href={'https://github.com/CarJou'} passHref target="_blank">
                <StyledButton><Image src={'/git.svg'} width={30} height={30}  alt={'Github'} />Github</StyledButton>
                </Link>
        </StyledWrapper>


    );
};
export default FooterComponent;

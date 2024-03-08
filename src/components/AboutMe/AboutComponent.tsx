"use client";
import styled from "styled-components";

const StyledText = styled.h1<{ $primary?: boolean; }>`
font-size: ${p => p.$primary ? '26px' : '20px'};
font-weight: ${p => p.$primary ? 500 : 400};
margin: 15px 0;
@media only screen and (max-width: 1000px) {
  font-size: ${p => p.$primary ? '20px' : '18px'};
}`
;

const StyledSubtitle = styled.h2`
  font-weight: 400;
  font-size: 26px;
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;


const AboutComponent = () => {
  return (
    <>
      <StyledText $primary>Hola! 👋 </StyledText>
      <StyledSubtitle>
        Mi nombre es <b style={{ color: '#0F524E' }}>Carla Joumier</b>,  <br />soy <b style={{ color: '#0F524E' }}>Frontend Developer</b> y <b style={{ color: '#0F524E' }}>UX-UI Designer</b> en formación.
      </StyledSubtitle>
      <StyledText>
        Me encuentro en búsqueda activa de nuevos desafíos que impulsen mi crecimiento profesional y me permitan aplicar mis habilidades como UX-UI Designer.
        Mi experiencia laboral incluye la colaboración en grandes equipos, donde contribuí al desarrollo de proyectos en diversos rubros.
      </StyledText>
      
      <StyledText>
      Estoy ansiosa por explorar oportunidades que no solo aprovechen mi base como Frontend Developer, sino que también me desafíen a profundizar mis conocimientos y habilidades como UX-UI Designer 🚀</StyledText>
      </>


  );
};
export default AboutComponent;

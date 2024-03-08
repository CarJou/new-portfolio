"use client";

import React, { useState } from "react";
import TabContent from "./TabContent";
import Card from "../Card/Card";
import styled from "styled-components";
import tabData from "../../app/utils/tabUtils";

type TabName = keyof typeof tabData;

const StyledWrapper = styled.div`
  width: auto;
  padding: 0 6rem;
  @media only screen and (max-width: 1000px) {
    padding: 0 2rem;
}
`;

const StyledTabContent = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "grid" : "none")};
  gap: 20px;
  margin-top: 20px;
  grid-template-columns: repeat(2, minmax(40%, auto));
  max-width: 100%;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin-bottom: 120px;
    text-align: center;
  }
`;

const StyledText = styled.h1`
font-size: 24px;
margin-top: 40px;
margin-bottom: 20px;
font-weight: 500;
@media only screen and (max-width: 1000px) {
  font-size: 18px;
}`;

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Tab1");

  const handleTabChange = (tabName: TabName) => {
    setActiveTab(tabName);
  };

  const activeTabData = tabData[activeTab];

  return (

    <StyledWrapper>
      <StyledText>Algunos de mis proyectos personales</StyledText>
      {Object.entries(tabData).map(([tabName, tabInfo]) => (
        <TabContent
          key={tabName}
          tabName={tabInfo.content}
          isActive={activeTab === tabName}
          onClick={() => handleTabChange(tabName as TabName)}
        />
      ))}
      {Object.keys(tabData).map((tabName) => (
        <StyledTabContent
          isActive={activeTab === (tabName as TabName)}
          key={tabName}
        >
          {activeTabData.cards.map(
            (
              card: {
                title: string;
                subtitle: string;
                buttonText: string;
                imageUrl: string;
                url: string;
              },
              index: React.Key | null | undefined
            ) => (
              <Card
                title={card.title}
                subtitle={card.subtitle}
                imageUrl={card.imageUrl}
                buttonText={card.buttonText}
                url={card.url}
                key={index}
              />
            )
          )}
        </StyledTabContent>
      ))}
    </StyledWrapper>

  );
};

export default TabComponent;

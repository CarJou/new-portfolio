"use client";

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ $activeTab: boolean }>`
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-right: 30px;
  padding-bottom: 5px;
  transition: all 0.1s ease;
  text-decoration: underline;
  letter-spacing: ${({ $activeTab }) => ($activeTab && '1px')};
  color: ${({ $activeTab }) => ($activeTab ? "#0F524E" : "#252b3399")};
  font-weight:  ${({ $activeTab }) => ($activeTab ? 600 : 300)};
`;


interface TabProps {
  isActive: boolean;
  tabName: string;
  onClick: () => void;
}

const TabContent = ({
  isActive,
  tabName,
  onClick,
}: TabProps) => {
  return (
    <>
        <StyledButton $activeTab={isActive} onClick={onClick}>
          {tabName}
        </StyledButton>
    </>
  );
};

export default TabContent;

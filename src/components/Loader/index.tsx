import React, { FC } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

export const PageLoader = () => (
  <Wrapper>
    <Paragraph>loading...</Paragraph>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const animation = keyframes`
  0% {
    opacity: 0;
  }

  30%, 60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 5px;
  animation: ${animation} 1.5s ease-in-out infinite;
`;

export const Loader: FC<{ text?: string }> = ({ text = "loading..." }) => <p>{text}</p>;

export const FixedLoader = () => <Fixed />;

const Fixed = styled.div`
  position: fixed;
  top: 70px;
  right: 60px;
  width: 80px;
  height: 80px;
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

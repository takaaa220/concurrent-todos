import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 14px;
  min-width: 100px;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: lightgray;
    color: gray;
  }
`;

import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
  hasValue: boolean;
  hasErrors: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 100%;
  height: 42px;

  background: var(--base-input);

  border: 2px solid var(--base-button);

  border-radius: 4px;

  transition: all 200ms;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 2px solid rgba(128, 71, 248, 0.3);
    `}

  ${({ hasValue }) =>
    hasValue &&
    css`
      border: 2px solid rgba(128, 71, 248, 0.3);
    `}

    ${({ hasErrors }) =>
    hasErrors &&
    css`
      border: 2px solid rgba(252, 3, 28, 0.3);
    `}

  input {
    width: 100%;
    border: none;
    outline: none;
    background: var(--base-input);

    &::placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: var(--base-label);
    }
  }
`;

export const Error = styled.div`
  font-size: 10px;
  margin-top: 5px;
  color: rgba(252, 3, 28, 0.7);
`;

import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "purple" | "default";
}

const colors = {
  purple: "#8047F8",
  default: "#E6E5E5",
};

export const RadioBox = styled.button<RadioBoxProps>`
  border-radius: 6px;
  border: none;
  height: 50px;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "#E6E5E5"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms;
  padding: 16px;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid var(--purple);
    `}

  span {
    display: inline-block;
    font-size: 1rem;
    color: var(--base-text);
    margin-left: 12px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 160%;
    /* or 19px */

    text-transform: uppercase;

    /* Base/Text */

    color: #574f4d;
  }
`;

export const Error = styled.div`
  font-size: 10px;
  margin-top: 5px;
  color: rgba(252, 3, 28, 0.7);
`;

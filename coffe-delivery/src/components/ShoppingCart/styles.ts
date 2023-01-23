import styled, { css } from "styled-components";
import { shade } from "polished";
import { ContainerProps } from "../interfaces";

const cartTypeVariations = {
  header: css`
    background: var(--yellow-light);
    color: var(--yellow-dark);
    position: relative;

    &:hover {
      background: ${shade(0.1, "#F1E9C9")};
    }
  `,

  cart: css`
    background: var(--purple-dark);
    color: var(--base-card);
  `,
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  min-height: 38px;
  max-width: 38px;
  max-height: 38px;
  border-radius: 6px;
  transition: background 200ms;
  cursor: pointer;
  border: none;

  ${(props) => cartTypeVariations[props.typeVariation || "header"]}

  ${({ totalItensCards, typeVariation }) =>
    totalItensCards &&
    typeVariation &&
    css`
      &::after {
        content: "${totalItensCards}";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: var(--white);
        font-weight: bold;
        font-size: 12px;
        width: 20px;
        height: 20px;
        top: -10px;
        right: -10px;
        border-radius: 50%;
        background: var(--yellow-dark);
      }
    `}
`;

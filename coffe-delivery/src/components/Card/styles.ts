import styled, { css } from "styled-components";

interface CardProps {
  hasHover?: boolean;
  typeRadious?: "rounded" | "normal";
  width?: string;
  height?: string;
  minHeight?: string;
}

export const Container = styled.div<CardProps>`
  width: ${({ width }) => (!!width ? width : "100%")};
  height: ${({ height }) => !!height && height};
  min-height: ${({ minHeight }) => !!minHeight && minHeight};
  background: var(--base-card);

  border-radius: ${({ typeRadious = "normal" }) =>
    typeRadious === "rounded" ? "6px 36px" : "6px"};
  transition: all 400ms;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  ${({ hasHover }) =>
    hasHover &&
    css`
      &:hover {
        box-shadow: 0 10px 7px -1px rgba(0, 0, 0, 0.1);

        transform: scale(1.05);
      }
    `}
`;

import React from "react";

import { Container } from "./styles";

interface CardProps {
  children: any;
  hasHover?: boolean;
  typeRadious?: "rounded" | "normal";
  width?: string;
  height?: string;
  minHeight?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  typeRadious,
  hasHover = false,
  width,
  minHeight,
  height,
}) => {
  return (
    <Container
      minHeight={minHeight}
      width={width}
      height={height}
      typeRadious={typeRadious}
      hasHover={hasHover}
    >
      {children}
    </Container>
  );
};
export { Card };

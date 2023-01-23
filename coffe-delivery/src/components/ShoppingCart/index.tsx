import React, { ButtonHTMLAttributes } from "react";
import { Cart } from "../../components/icons";

import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeVariation?: "header" | "cart";
  totalItensCards?: number;
}

const ShoppingCart: React.FC<IButtonProps> = ({
  totalItensCards,
  typeVariation,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      typeVariation={typeVariation}
      totalItensCards={totalItensCards}
    >
      <Cart />
    </Container>
  );
};
export { ShoppingCart };

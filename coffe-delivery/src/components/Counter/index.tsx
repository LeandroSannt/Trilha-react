import React, { useCallback } from "react";
import { Subtract, Add } from "../icons";

import { Container } from "./styles";

interface CouterProps {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  incrementCart?(): void;
  decrementCart?(): void;
}

const Counter: React.FC<CouterProps> = ({
  incrementCart,
  setQuantity,
  quantity,
  decrementCart,
}) => {
  const increment = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    if (quantity !== 0) {
      setQuantity((prev) => prev - 1);
    }
  }, [quantity]);

  return (
    <Container>
      <button onClick={decrementCart || decrement}>
        <Subtract />
      </button>
      {quantity}
      <button onClick={incrementCart || increment}>
        <Add />
      </button>
    </Container>
  );
};
export { Counter };

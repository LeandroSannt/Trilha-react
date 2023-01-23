import React, { useState } from "react";
import { CreditDebit, CreditCard, Money2 } from "../../components/icons";

import { RadioBox, TransactionTypeContainer, Error } from "./styles";

interface PaymentProps {
  type: string;
  setType(value: string): void;
}

const PaymentMethodButton: React.FC<PaymentProps> = ({ setType, type }) => {
  return (
    <>
      {type === "error" && <Error>Selecione o metodo de pagamento *</Error>}
      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => setType("credit")}
          isActive={type === "credit"}
          activeColor="purple"
        >
          <CreditCard />
          <span>Cartão de crédito</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setType("debit")}
          isActive={type === "debit"}
          activeColor="purple"
        >
          <CreditDebit />

          <span>cartão de débito</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setType("money")}
          isActive={type === "money"}
          activeColor="purple"
        >
          <Money2 />

          <span>dinheiro</span>
        </RadioBox>
      </TransactionTypeContainer>
    </>
  );
};
export { PaymentMethodButton };

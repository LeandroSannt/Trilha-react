import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { ICoffes, DataProps } from "../interfaces/coffes";
import { coffes } from "../mock/coffes";
import { CoffesCart, useCart } from "./useCart";

interface PostOrder {
  address: DataProps;
  typePayment: "credit" | "debit" | "money";
}

interface RequestContextData {
  getCoffees(): Promise<ICoffes[]>;
  postOrder(value: PostOrder): void;
  order: PostOrder | undefined;
}

const RequestContext = createContext<RequestContextData>(
  {} as RequestContextData
);

const RequestProvider = ({ children }: any) => {
  const [order, setOrder] = useState<PostOrder>();
  const { setCoffestCart } = useCart();

  const delay = (amount = 750) =>
    new Promise((resolve) => setTimeout(resolve, amount));

  const getCoffees = async (): Promise<ICoffes[]> => {
    await delay();
    return coffes;
  };

  const postOrder = async ({ address, typePayment }: PostOrder) => {
    setOrder({ address, typePayment });
    localStorage.setItem("@desafio:cart", JSON.stringify([]));
    setCoffestCart([]);

    return;
  };

  return (
    <RequestContext.Provider
      value={{
        getCoffees,
        postOrder,
        order,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

function useRequest() {
  const context = useContext(RequestContext);

  if (!context) {
    throw new Error("useRequest must be used RequestProvider");
  }

  return context;
}

export { RequestProvider, useRequest };

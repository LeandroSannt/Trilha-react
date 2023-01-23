import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { ICoffes } from "../interfaces/coffes";
import { useToast } from "../hooks/useToast";

export interface CoffesCart extends ICoffes {
  quantity: number;
  amount: number;
}

interface TotalProps {
  totalSumCoffes: number;
  totalPercent: number;
  totalPercentSum: number;
}

interface CartContextData {
  remove(id: number): void;
  addCoffeToCart(coffe: ICoffes, quantity: number): void;
  increment(index: number, quantity: number): void;
  decrement(index: number, quantity: number): void;
  setCoffestCart(value: CoffesCart[]): void;
  coffesCart: CoffesCart[];
  total: TotalProps;
}

interface Props {
  children: JSX.Element[];
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: Props) => {
  const { notify } = useToast();
  const calculateTotal = (coffesCart: CoffesCart[]) => {
    const totalSumCoffes = coffesCart.reduce((ac, prev) => {
      return prev.amount + ac;
    }, 0);

    const totalPercent = totalSumCoffes * 0.15;

    const totalPercentSum = totalSumCoffes + totalPercent;

    return {
      totalSumCoffes,
      totalPercent,
      totalPercentSum,
    };
  };
  const [coffesCart, setCoffestCart] = useState<CoffesCart[]>(() => {
    const cart = localStorage.getItem("@desafio:cart");
    if (cart) {
      const cartjson = JSON.parse(cart);
      return [...cartjson];
    }
    return [];
  });

  const [total, setTotal] = useState<TotalProps>(calculateTotal(coffesCart));

  const addCoffeToCart = (coffe: ICoffes, quantity: number) => {
    if (quantity === 0) {
      notify({
        message:
          "Adicione alguma quantidade para colocar o produto no carrinho",
        types: "error",
      });
      return;
    }

    const coffeRequiredQuantity = {
      ...coffe,
      quantity,
      amount: coffe.price * quantity,
    };

    const hasCoffeInCart = coffesCart.find((coffeF) => coffeF.id === coffe.id);

    if (hasCoffeInCart) {
      const newCoffe = [...coffesCart];

      const index = newCoffe.findIndex((c) => c.id === hasCoffeInCart.id);

      if (newCoffe[index].quantity !== quantity) {
        newCoffe[index].quantity = quantity;
        newCoffe[index].amount = coffe.price * quantity;
        setCoffestCart(newCoffe);
      }

      notify({
        message: "Quantidade atualizada no carrinho",
        types: "success",
      });

      return;
    }

    setCoffestCart((prev) => [...prev, coffeRequiredQuantity]);

    notify({
      message: "Produto adicionado ao carrinho",
      types: "success",
    });
  };

  const increment = (index: number, quantity: number) => {
    const newCoffe = [...coffesCart];
    newCoffe[index].quantity += 1;

    newCoffe[index].amount = newCoffe[index].quantity * newCoffe[index].price;

    setCoffestCart(newCoffe);
  };

  const decrement = (index: number, quantity: number) => {
    if (quantity > 1) {
      const newCoffe = [...coffesCart];
      newCoffe[index].quantity -= 1;

      newCoffe[index].amount = newCoffe[index].quantity * newCoffe[index].price;

      setCoffestCart(newCoffe);
    }
  };

  const remove = useCallback(
    (id: number) => {
      const filteredCoffes = coffesCart.filter((coffe) => coffe.id !== id);

      setCoffestCart(filteredCoffes);
    },
    [coffesCart]
  );

  useEffect(() => {
    localStorage.setItem("@desafio:cart", JSON.stringify(coffesCart));

    const { totalPercent, totalPercentSum, totalSumCoffes } =
      calculateTotal(coffesCart);

    setTotal({
      totalSumCoffes,
      totalPercent,
      totalPercentSum,
    });
  }, [coffesCart]);

  return (
    <CartContext.Provider
      value={{
        setCoffestCart,
        decrement,
        increment,
        remove,
        addCoffeToCart,
        coffesCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used CartProvider");
  }

  return context;
}

export { CartProvider, useCart };

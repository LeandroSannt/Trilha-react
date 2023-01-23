import { coffes } from "../mock/coffes";
import { ICoffes } from "../interfaces/coffes";

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

const getCoffees = async (): Promise<ICoffes[]> => {
  await delay();
  return coffes;
};

export { getCoffees };

interface IPostOrder {}

const postOrder = () => {};

import React, { useEffect, useState } from "react";
import { Cart, Timer, Embalagem, Coffe } from "../../components/icons";
import { Card, Counter, ShoppingCart } from "../../components";
import { ICoffes } from "../../interfaces/coffes";
import CircleLoader from "react-spinners/CircleLoader";

import {
  Container,
  Section,
  ItemList,
  Aside,
  ItemCard,
  Category,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { useRequest } from "../../hooks/useRequest";

interface CoffeProps {
  coffe: ICoffes;
}

const CardCoffe: React.FC<CoffeProps> = ({ coffe }) => {
  const { addCoffeToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddCoffee = () => {
    addCoffeToCart(coffe, quantity);
  };

  return (
    <Card hasHover>
      <ItemCard>
        <div className="firstSection">
          <img src={coffe.photo} alt={coffe.name} />
          <div className="categorys">
            {coffe.categorys.map((category) => (
              <Category key={category}>{category}</Category>
            ))}
          </div>

          <h3>{coffe.name}</h3>
          <p>{coffe.description}</p>
        </div>

        <div className="secondSection">
          <span>
            R$
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                minimumFractionDigits: 2,
                currency: "BRL",
              }).format(coffe.price)}
            </strong>
          </span>
          <div className="counter">
            <Counter setQuantity={setQuantity} quantity={quantity} />
            <ShoppingCart onClick={handleAddCoffee} typeVariation="cart" />
          </div>
        </div>
      </ItemCard>
    </Card>
  );
};

const Home: React.FC = () => {
  const [coffees, setCoffest] = useState<ICoffes[]>([]);
  const [loading, setLoading] = useState(false);

  const { getCoffees } = useRequest();

  useEffect(() => {
    setLoading(true);

    getCoffees()
      .then((response) => {
        setCoffest(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [getCoffees, setLoading]);

  return (
    <Container>
      <Section>
        <div>
          <div>
            <h1>
              Encontre o café perfeito para <br /> qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>
          </div>

          <ul>
            <ItemList color="#C47F17">
              <div>
                <Cart />
              </div>
              Compra simples e segura
            </ItemList>

            <ItemList color="#574F4D">
              <div>
                <Embalagem />
              </div>
              Embalagem mantém o café intacto
            </ItemList>

            <ItemList color="#DBAC2C">
              <div>
                <Timer />
              </div>
              Entrega rápida e rastreada
            </ItemList>
            <ItemList color="#8047F8">
              <div>
                <Coffe />
              </div>
              O café chega fresquinho até você
            </ItemList>
          </ul>
        </div>
        <img src="src/assets/coffeHome.png" alt="" />
      </Section>

      <Aside>
        <h2>Nossos cafés</h2>

        {loading ? (
          <div className="blankContainer">
            <CircleLoader />
          </div>
        ) : (
          <div className="cards">
            {coffees.map((coffee) => (
              <CardCoffe key={coffee.id} coffe={coffee} />
            ))}
          </div>
        )}
      </Aside>
    </Container>
  );
};
export default Home;

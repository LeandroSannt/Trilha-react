import React, { useEffect } from "react";

import { Container, Title, Informations, ItemList } from "./styles";

import { useRequest } from "../../hooks/useRequest";
import { Cart, Money, Timer, Address, Location } from "../../components/icons";
import { useNavigate } from "react-router-dom";

const Confirmed: React.FC = () => {
  const { order } = useRequest();
  const navigate = useNavigate();

  const methosdPayment = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Debito",
    money: "Dinheiro",
  };

  useEffect(() => {
    if (!order?.address) {
      navigate("/checkout");
    }
  }, [order]);

  if (!order) {
    return <></>;
  }

  return (
    <Container>
      <Title>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
      </Title>

      <Informations>
        <div className="content">
          <ItemList color="#8047F8">
            <div>
              <Location color="white" />
            </div>
            <span>
              <p>
                Entrega em{" "}
                <strong>
                  Rua {order.address.rua},{order.address.numero}
                </strong>
              </p>
              <p>
                {order.address.bairro} - {order.address.cidade},
                {order.address.uf}
              </p>
            </span>
          </ItemList>

          <ItemList color="#DBAC2C">
            <div>
              <Timer />
            </div>
            <span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </span>
          </ItemList>

          <ItemList color="#C47F17">
            <div>
              <Money color="white" />
            </div>
            <span>
              <p>Pagamento na entrega</p>
              <strong>{methosdPayment[order.typePayment]}</strong>
            </span>
          </ItemList>
        </div>
        <img src="src/assets/Illustration.png" alt="logo entrega" />
      </Informations>
    </Container>
  );
};
export default Confirmed;

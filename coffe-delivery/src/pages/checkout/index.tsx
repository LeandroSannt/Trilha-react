import React, { useEffect, useState } from "react";

import { Card, Input, PaymentMethodButton, Counter } from "../../components";
import { Address, Money, Trash } from "../../components/icons";
import { CoffesCart, useCart } from "../../hooks/useCart";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "../../hooks/useToast";
import { useRequest } from "../../hooks/useRequest";

import { schemaValidation } from "../../validations/coffeeSchema";

import viaCep from "../../config/viaCep";
import { DataProps } from "../../interfaces/coffes";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Aside,
  Section,
  Content,
  Title,
  RowInput,
  Footer,
  Coffe,
  CoffesContainer,
  Button,
  ButtonConfirm,
} from "./styles";

interface CoffeProps {
  coffee: CoffesCart;
  index: number;
}

enum PaymentType {
  money = "money",
  credit = "credit",
  debit = "debit",
}

const Coffes: React.FC<CoffeProps> = ({ coffee, index }) => {
  const { decrement, increment, remove } = useCart();

  const [quantityCoffee, setQuantityCoffee] = useState(coffee.quantity);

  useEffect(() => {
    setQuantityCoffee(coffee.quantity);
  }, [coffee.quantity]);

  return (
    <>
      <Coffe>
        <img src={coffee.photo} alt={coffee.name} />
        <div className="coffee">
          <div className="firstContainer">
            <p>{coffee.name}</p>
            <div className="btns">
              <Counter
                incrementCart={() => {
                  increment(index, quantityCoffee);
                }}
                decrementCart={() => {
                  decrement(index, quantityCoffee);
                }}
                quantity={quantityCoffee}
                setQuantity={setQuantityCoffee}
              />
              <Button
                onClick={() => {
                  remove(coffee.id);
                }}
              >
                <Trash />
                REMOVER
              </Button>
            </div>
          </div>

          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(coffee.amount)}
          </strong>
        </div>
      </Coffe>
    </>
  );
};

const Checkout: React.FC = () => {
  const { coffesCart, total } = useCart();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { postOrder } = useRequest();

  const { register, handleSubmit, watch, formState, reset } = useForm({
    resolver: zodResolver(schemaValidation),
    mode: "onBlur",
    defaultValues: {
      cep: "",
      rua: "",
      complemento: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const handleCreateAddress = (data: DataProps) => {
    if (paymentMethod === "") {
      setPaymentMethod("error");
      return;
    }

    postOrder({
      address: data,
      typePayment: paymentMethod as PaymentType,
    });

    navigate("/confirmed");
  };

  const cepWatch = watch("cep");

  const handleChangeCep = async () => {
    try {
      const thisCep = cepWatch?.replace(/\D/g, "");
      if (cepWatch !== "") {
        const {
          data: { bairro, cep, complemento, logradouro, localidade, uf },
        } = await viaCep.get(`ws/${thisCep}/json`);

        reset({
          bairro,
          cep,
          complemento,
          rua: logradouro,
          cidade: localidade,
          uf,
          numero: "",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        message: "Não foi possivel encontrar esse endereço",
        types: "error",
      });
    }
  };

  return (
    <Container>
      <Section>
        <div>
          <h3>Complete seu pedido</h3>
          <Card minHeight="350px" typeRadious="normal">
            <Content>
              <Title>
                <Address />
                <div>
                  <h5>Endereço de Entrega</h5>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </Title>

              <form id="my-form">
                <div onBlur={handleChangeCep}>
                  <Input
                    placeholder="CEP"
                    containerStyle={{ maxWidth: "200px" }}
                    name="cep"
                    register={{
                      ...register("cep"),
                    }}
                    errors={formState.errors.cep?.message}
                  />
                </div>
                <Input
                  containerStyle={{ marginTop: "16px" }}
                  placeholder="Rua"
                  name="rua"
                  register={{
                    ...register("rua"),
                  }}
                  errors={formState.errors.rua?.message}
                />
                <RowInput>
                  <Input
                    containerStyle={{ maxWidth: "200px" }}
                    placeholder="Número"
                    name="numero"
                    register={{ ...register("numero") }}
                    errors={formState.errors.numero?.message}
                  />
                  <Input
                    placeholder="Complemento"
                    name="complemento"
                    register={{ ...register("complemento") }}
                    errors={formState.errors.complemento?.message}
                  />
                </RowInput>

                <RowInput>
                  <Input
                    containerStyle={{ maxWidth: "200px" }}
                    placeholder="Bairro"
                    name="bairro"
                    register={{ ...register("bairro") }}
                    errors={formState.errors.bairro?.message}
                  />
                  <Input
                    placeholder="Cidade"
                    name="cidade"
                    register={{ ...register("cidade") }}
                    errors={formState.errors.cidade?.message}
                  />
                  <Input
                    containerStyle={{ maxWidth: "60px" }}
                    placeholder="UF"
                    name="uf"
                    register={{ ...register("uf") }}
                    errors={formState.errors.uf?.message}
                  />
                </RowInput>
              </form>
            </Content>
          </Card>
        </div>

        <Card height="207px" typeRadious="normal">
          <Content>
            <Title>
              <Money />
              <div>
                <h5>Pagamento</h5>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Title>

            <PaymentMethodButton
              setType={setPaymentMethod}
              type={paymentMethod}
            />
          </Content>
        </Card>
      </Section>

      <Aside>
        <div>
          <h3>Cafés selecionados</h3>
          <Card height="498px" typeRadious="rounded">
            <Content>
              <CoffesContainer>
                {!!coffesCart.length ? (
                  coffesCart.map((coffee, index) => (
                    <Coffes key={coffee.id} index={index} coffee={coffee} />
                  ))
                ) : (
                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                    }}
                  >
                    <h2>Está meio vazio por aqui !</h2>
                  </div>
                )}
              </CoffesContainer>

              <Footer>
                <div className="item">
                  <div>
                    Total de itens
                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(total.totalSumCoffes)}
                    </span>
                  </div>
                </div>

                <div className="item">
                  <div>
                    Entrega{" "}
                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(total.totalPercent)}
                    </span>
                  </div>
                </div>

                <div className="item total">
                  <div>
                    Total{" "}
                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(total.totalPercentSum)}
                    </span>
                  </div>
                </div>

                <ButtonConfirm
                  onClick={handleSubmit(handleCreateAddress)}
                  form="my-form"
                >
                  {!!coffesCart.length
                    ? "CONFIRMAR PEDIDO"
                    : "SELECIONE ALGUM PRODUTO"}
                </ButtonConfirm>
              </Footer>
            </Content>
          </Card>
        </div>
      </Aside>
    </Container>
  );
};
export default Checkout;

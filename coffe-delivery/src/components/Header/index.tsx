import React from "react";

import { Container, Address } from "./styles";
import { ShoppingCart } from "../index";
import { Location } from "../icons";
import { useCart } from "../../hooks/useCart";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { coffesCart } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="container">
        <Link to={"/"}>
          <img src="src/assets/Logo.png" alt="logo" />
        </Link>

        <nav>
          <Address>
            <Location />
            <p>Porto Alegre, RS</p>
          </Address>
          <ShoppingCart
            onClick={() => {
              navigate("checkout");
            }}
            typeVariation="header"
            totalItensCards={coffesCart.length}
          />
        </nav>
      </div>
    </Container>
  );
};
export { Header };

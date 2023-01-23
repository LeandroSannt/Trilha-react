import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 32px;

  h3 {
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Section = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Aside = styled.aside`
  flex: 1;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 14px;

  h5 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: var(--base-subtitle);
    margin-bottom: 2px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: var(--base-text);
  }

  svg {
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const RowInput = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 16px;
`;

export const CoffesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow: auto;
`;

export const Coffe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #e6e5e5;

  & + & {
    margin-top: 24px;
  }
  img {
    width: 64px;
    height: 64px;
  }

  .firstContainer {
    flex: 1;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    /* identical to box height, or 21px */

    display: flex;
    align-items: center;

    /* Base/Subtitle */

    color: var(--base-subtitle);

    margin-bottom: 8px;
  }

  .coffee {
    margin-left: 20px;
    width: 100%;
    display: flex;
    align-items: flex-start;

    .btns {
      height: 32px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    strong {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      /* identical to box height, or 21px */

      display: flex;
      align-items: center;
      text-align: right;

      /* Base/Text */

      color: var(--base-text);
    }
  }
`;

export const Footer = styled.div`
  height: 156px;
  width: 100%;

  display: flex;
  flex-direction: column;

  .item + .item {
    margin-top: 12px;
  }

  .item {
    > div {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--base-text);

      span {
        font-size: 16px;
      }
    }
  }

  .item.total {
    > div {
      color: #403937;
      font-size: 20px;
      font-weight: bold;

      span {
        font-weight: bold;

        font-size: 20px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  border: none;

  width: 91px;
  height: 38px;

  /* Base/Button */

  background: var(--base-button);
  border-radius: 6px;

  font-size: 12px;

  transition: background 200ms;

  &:hover {
    background-color: rgba(252, 3, 28, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ButtonConfirm = styled.button`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  gap: 4px;

  width: 100%;
  height: 46px;

  border: none;

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 6px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-transform: uppercase;

  /* Base/White */

  color: #ffffff;
`;

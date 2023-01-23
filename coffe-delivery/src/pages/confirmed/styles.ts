import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 14px;
  margin-top: 80px;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    margin-bottom: 4px;
    /* identical to box height, or 42px */

    /* Brand / Yellow Dark */

    color: var(--yellow-dark);
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    /* identical to box height, or 26px */

    /* Base/Subtitle */

    color: var(--base-subtitle);
    font-stretch: 100;
  }

  svg {
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Informations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 526px;
    min-height: 270px;
    padding: 40px;

    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    border: 2px solid transparent;

    border-radius: 6px 36px;

    p {
      line-height: 130%;
      color: var(--base-text);
    }

    strong {
      color: var(--base-text);
    }
  }
`;

interface ListProps {
  color: "#C47F17" | "#DBAC2C" | "#574F4D" | "#8047F8";
}

export const ItemList = styled.li<ListProps>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    svg {
      width: 16px;
      height: 16px;
      color: var(--white);
      list-style: none;
    }
  }
`;

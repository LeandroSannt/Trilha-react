import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  min-height: 544px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: var(--base-title);
    margin-bottom: 16px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--base-subtitle);
    margin-bottom: 66px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const Aside = styled.aside`
  width: 100%;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: var(--base-subtitle);
    margin-bottom: 54px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 32px;
    row-gap: 40px;
    width: 100%;
  }
`;

export const ItemCard = styled.div`
  min-width: 256px;
  min-height: 310px;
  padding: 24px;

  .firstSection {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: -50px;
      margin-bottom: 12px;
      width: 120px;
      height: 120px;
    }

    .categorys {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      flex-wrap: wrap;
      /* display: grid;
      grid-template-columns: 1fr 1fr; */
      margin-bottom: 16px;
    }

    h3 {
      line-height: 130%;
      margin-bottom: 8px;
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */

      text-align: center;

      /* Base/Label */

      color: var(--base-label);
      margin-bottom: 33px;
    }
  }

  .secondSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      line-height: 130%;
      margin-left: 10px;

      strong {
        margin-left: 5px;

        font-size: 24px;
        font-family: "Baloo 2";
        font-weight: 800;
        font-style: normal;
        color: var(--base-text);
      }
    }

    .counter {
      display: flex;
      gap: 8px;
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

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  color: var(--yellow-dark);

  background: #f1e9c9;
  border-radius: 100px;
`;

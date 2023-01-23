import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 84px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`;

export const Address = styled.title`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 143px;
  height: 40px;
  background: var(--purple-light);
  border-radius: 6px;
  font-size: 14px;
  color: var(--purple);
  padding: 0 8px;
`;

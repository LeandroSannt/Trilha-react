import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--base-button);

  padding: 8px;
  gap: 4px;
  width: 72px;
  height: 38px;
  border-radius: 6px;

  button {
    color: var(--purple);
    font-size: 20px;
    background-color: initial;
    border: none;
  }
`;

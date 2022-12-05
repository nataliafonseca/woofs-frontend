import styled from "styled-components";

export const Container = styled.div<{ noContent: boolean }>`
  margin: 20px;
  display: ${(props) => (props.noContent ? "grid" : "initial")};
  grid-template-rows: auto 1fr;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Filter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.5rem;
  margin-block: 2rem;
  width: 100%;
  border-radius: 1000px;
  border: 1px solid ${(props) => props.theme.gray300};
  padding: 0.5rem;

  label {
    line-height: 0;
  }

  input {
    border: none;
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.green500};
  }
`;

export const MatchesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

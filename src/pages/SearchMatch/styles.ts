import styled from "styled-components";

export const SearchMatchContainer = styled.div<{ noContent: boolean }>`
  margin: 20px;
  display: ${(props) => (props.noContent ? "grid" : "initial")};
  grid-template-rows: auto 1fr;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";

export const Container = styled.div<{ noContent: boolean }>`
  margin: 20px 0;
  display: ${(props) => (props.noContent ? "grid" : "block")};
  grid-template-rows: auto 1fr;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 20px;
`;

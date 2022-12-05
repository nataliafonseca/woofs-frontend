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

export const MatchesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 316px;
  margin: 0 auto;
  margin-top: 2rem;
`;

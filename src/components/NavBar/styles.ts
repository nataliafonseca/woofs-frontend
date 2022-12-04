import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;

  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.16);
  padding: 0 20px;
  background: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.white};
`;

export const NavBarContent = styled.div`
  max-width: 425px;
  margin: 0 auto;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.16);
  padding: 0 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

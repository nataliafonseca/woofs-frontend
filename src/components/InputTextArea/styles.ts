import styled from "styled-components";

export const InputTextAreaContainer = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.gray300};
  border-radius: 23px;
  height: 143px;
  resize: none;
  padding: 0.9rem 2rem;

  :focus {
    border: 1px solid ${({ theme }) => theme.green500};
  }
`;

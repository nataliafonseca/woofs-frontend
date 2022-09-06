import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const RegisterPetContainer = styled.div`
  margin: 20px;
`;

export const SubTitle = styled.span`
  font-size: 20px;
  line-height: 24px;
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.gray800};
`;

export const Gender = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;

  margin-bottom: 20px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  margin-bottom: 20px;
`;

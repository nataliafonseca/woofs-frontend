import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const RadioButtonContainer = styled(RadioGroup.Item)`
  padding: 12px;
  font-weight: 700;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[data-state="unchecked"] {
    color: ${(props) => props.theme.green500};
    border: 1px solid ${(props) => props.theme.gray300};
    background: none;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.green500};
    background: ${(props) => props.theme.green500};
  }
`;

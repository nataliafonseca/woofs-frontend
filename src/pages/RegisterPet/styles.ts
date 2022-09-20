import * as RadioGroup from "@radix-ui/react-radio-group";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Slider from "@radix-ui/react-slider";
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

export const Interests = styled(ToggleGroup.Root)`
  margin-bottom: 20px;
`;

export const InterestsLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & + & {
    margin-top: 11px;
  }
`;

export const ToggleItem = styled(ToggleGroup.Item)`
  padding: 12px;
  font-weight: 700;
  border-radius: 100px;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &[data-state="off"] {
    color: ${(props) => props.theme.green500};
    border: 1px solid ${(props) => props.theme.gray300};
    background: none;
  }

  &[data-state="on"] {
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.green500};
    background: ${(props) => props.theme.green500};
  }
`;

export const DistanceWrapper = styled.div`
  position: relative;
`;

export const DistanceNumber = styled.span`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  display: block;
  transform: translateY(30px);
  font-size: 0.75rem;
  color: ${(props) => props.theme.gray800};
`;

export const Distance = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  padding-top: 30px;
  width: 100%;

  &[data-orientation="horizontal"] {
    height: 20px;
  }

  &[data-orientation="vertical"] {
    flex-direction: column;
    width: 20px;
    height: 100px;
  }
`;

export const StyledTrack = styled(Slider.Track)`
  background: ${(props) => props.theme.gray100};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;

  &[data-orientation="horizontal"] {
    height: 6px;
  }

  &[data-orientation="vertical"] {
    width: 3px;
  }
`;

export const StyledRange = styled(Slider.Range)`
  position: absolute;
  background-color: ${(props) => props.theme.green500};
  border-radius: 9999px;
  height: 100%;
`;

export const StyledThumb = styled(Slider.Thumb)``;

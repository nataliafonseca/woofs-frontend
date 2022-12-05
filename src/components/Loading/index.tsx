import LoadingImg from "../../assets/loading.svg";
import Logo from "../../assets/woofsGreen.svg";
import { Wrapper } from "./styles";

export function Loading() {
  return (
    <Wrapper>
      <img className="loading" src={LoadingImg} alt="Loading" />
      <img className="logo" src={Logo} alt="" />
    </Wrapper>
  );
}

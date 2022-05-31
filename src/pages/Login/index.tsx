import { FaAngleLeft, FaUserAlt } from "react-icons/fa";
import { GoBackButton } from "../../components/GoBackButton";
import { GreenTitle } from "../../components/GreenTitle";
import { Header } from "../../components/Header";
import loginImage from '../../assets/loginImage.png'
import { Input } from "../../components/Input";
import { DefaultButton } from "../../components/DefaultButton";

import { 
    Container, 
    ImageStyled, 
    SectionTitle, 
    ImageWrapper, 
    LoginWrapper,
    LinkWrapper 
} from "./styles";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <Container>
            <Header>
                <GoBackButton link='/'>
                    <FaAngleLeft size={17} />
                </GoBackButton>

                <GreenTitle>Login</GreenTitle>
            </Header>

            <SectionTitle>Entre com seu login e senha</SectionTitle>

            <ImageWrapper>
                <ImageStyled 
                    src={loginImage}
                />
            </ImageWrapper>

            <LoginWrapper>
                <Input 
                    label="Login"
                    icon={<FaUserAlt />}
                />
                <Input 
                    label="Senha"
                    type="password"
                />
                <DefaultButton>
                    Login
                </DefaultButton>
            </LoginWrapper>

            <LinkWrapper>
                <Link to="/recover">Recuperar meu acesso</Link>
            </LinkWrapper>
        </Container>
    )
}
import logo from '../../assets/logo.png';
import { Carousel } from '../../components/Carousel';
import { DefaultButton } from '../../components/DefaultButton';
import { Link } from "react-router-dom";

import { 
    Container, 
    Logo,
    Login,
    Description,
    Strong 
} from './styles';

export function Main() {
   
    return (
        <Container>
            <Logo src={logo} alt="logo" />

            <Carousel />

            <Description>
                Com o <Strong>woofs</Strong> é super facil encontrar um par perfeito para o seu bichinho
            </Description>

            <DefaultButton  selectable>Criar conta</DefaultButton>

            <Login>Já tem uma conta? <Link to='/createprofile'>Entrar</Link></Login>
        </Container>
    )
}
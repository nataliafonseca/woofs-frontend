import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { GoBackButton } from '../../components/GoBackButton';
import { DefaultButton } from '../../components/DefaultButton';
import { GreenTitle } from '../../components/GreenTitle';
import { OptionMarker } from '../../components/OptionMarker';

import { Container, SectionTitle } from './styles';

export function CreateProfile() {
    return (
        <Container>
            <GoBackButton link='/'>
                <FaAngleLeft size={17} />
            </GoBackButton>
            <GreenTitle>Criar conta</GreenTitle>

            <SectionTitle>Informações pessoais</SectionTitle>

            <SectionTitle>Termos e informações</SectionTitle>
            <OptionMarker>Receber informações por e-mail</OptionMarker>
            <OptionMarker>Aceitar <Link to='/createprofile'>termos de uso</Link></OptionMarker>

            <DefaultButton>Avançar</DefaultButton>

        </Container>
    )
}
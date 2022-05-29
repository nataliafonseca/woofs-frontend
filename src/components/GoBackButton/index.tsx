import { Container, } from './styles';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface GoBackButtonProps {
    link: string;
    children: ReactNode;
}

export function GoBackButton({ link, children }: GoBackButtonProps) {
    return (
        <Link to={link}>
            <Container><div>{children}</div></Container>
        </Link>
    )
}
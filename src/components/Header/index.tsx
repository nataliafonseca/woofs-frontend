import { ReactNode } from 'react';

import { HeaderWrapper } from './styles';

interface Props {
  children: ReactNode;
}

export function Header({ children }: Props) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

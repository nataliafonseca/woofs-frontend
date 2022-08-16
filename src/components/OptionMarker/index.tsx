import { ReactNode, useState } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

import { Container } from './styles';

interface OptionMarkerProps {
  selected?: boolean;
  children: ReactNode;
}

export function OptionMarker({ selected, children }: OptionMarkerProps) {
  const [isSelected, setIsSelected] = useState(selected || false);

  const handleOptionClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Container isSelected={isSelected}>
      {isSelected ? (
        <FaCheckSquare size={17} onClick={handleOptionClick} />
      ) : (
        <FaRegSquare size={17} onClick={handleOptionClick} />
      )}

      <p>{children}</p>
    </Container>
  );
}

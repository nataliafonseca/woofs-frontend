interface IconProps {
  active: boolean;
  enabledSrc: string;
  disabledSrc: string;
}

export function Icon({ active, enabledSrc, disabledSrc }: IconProps) {
  return <>{active ? <img src={enabledSrc} /> : <img src={disabledSrc} />}</>;
}

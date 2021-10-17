import React from 'react';

export interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  color?: 'primary' | 'white';
  variant?: 'circle' | 'full';
}

export const Logo: React.FC<LogoProps> = props => {
  const {color, variant, ...rest} = props;
  return (
    <img alt="Patria" {...rest} src={`./img/svg/logo-${props.variant}-${props.color}.svg`} />
  )
}

Logo.defaultProps = {
  color: 'primary',
  variant: 'circle',
}

import React from 'react';
import { ButtonSizeMapper, ButtonStyleMapper } from './Button.constants';
import Text from '../Text/Text';
import { ButtonProps } from './Button.types';
import clsx from 'clsx';
import { TextStyles } from '../Text/Text.types';


export const Button = ({
  type = 'primary',
  size = 'medium',
  label,
  icon: IconComponent,
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      style={{
        background: type === 'gradient' ? 'linear-gradient(225deg, #2DCCFD 9.35%, #AD20E2 88.41%)' : ''
      }}
      className={clsx('font-custom flex items-center rounded-[4px]', ButtonSizeMapper[size].className, ButtonStyleMapper[type])}
      {...props}
    >
      {IconComponent ? <IconComponent width={20} /> : ''}
      <Text text={label} type={ButtonSizeMapper[size].textType as TextStyles} weight='semibold' />
    </button>
  );
};

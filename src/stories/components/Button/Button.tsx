import React from 'react';
import { ButtonStyleMapper } from './Button.constants';
import Text from '../Text/Text';
import { ButtonProps } from './Button.types';
import clsx from 'clsx';


export const Button = ({
  type = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      style={{
        background: type === 'gradient' ? 'linear-gradient(225deg, #2DCCFD 9.35%, #AD20E2 88.41%)' : ''
      }}
      className={clsx('font-custom px-[24px] py-[20px] rounded-[4px] gap-[10px]', ButtonStyleMapper[type])}
      {...props}
    >
      <Text text={label} type='caption' weight='semibold' />
    </button>
  );
};

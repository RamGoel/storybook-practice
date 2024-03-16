import React from 'react';
import { ButtonStyleMapper } from './Button.constants';
import Text from '../Text/Text';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'outline' | 'outline-filled' | 'gradient' | 'success' |'warning'|'error';
  size?: 'small' | 'medium' | 'large';
  label: string;
  icon?: any;
  onClick?: () => void;
}

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
      className={`${ButtonStyleMapper[type]} font-custom px-[24px] py-[20px] rounded-[4px] gap-[10px]`}
      {...props}
    >
      <Text text={label} type='caption' weight={'semibold'} />
    </button>
  );
};

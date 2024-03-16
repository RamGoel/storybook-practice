import React from 'react'
import { TextSizeMapper } from './Text.constants';
import { TextProps } from './Text.types';

const Text = ({ text, type, weight = 'normal' }: TextProps) => {
    let size = TextSizeMapper[type].size;
    return (
        <div>
            <h1 className={`font-custom text-[${size}] ${weight === 'normal' ? '' : `font-${weight}`}`}>{text ?? 'Hello Ji'}</h1>
        </div>
    )
}

export default Text
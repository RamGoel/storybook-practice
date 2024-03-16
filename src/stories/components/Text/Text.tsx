import React from 'react'
import { TextSizeMapper, TextWeightMapper } from './Text.constants';
import { TextProps } from './Text.types';
import clsx from 'clsx';

const Text = ({ text, type, weight = 'normal' }: TextProps) => {
    return (
        <h1 className={clsx('font-custom', TextSizeMapper[type], TextWeightMapper[weight])}>{text ?? 'Hello Ji'}</h1>
    )
}

export default Text
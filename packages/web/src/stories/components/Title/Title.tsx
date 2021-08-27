import React from 'react'
import './title.css'

interface TitleProps {
    primary: boolean;

    backgroundColor: string;

    size: 'box-title' | 'large-box-title' | 'page-title';

    label: string;

}

export const Title = ({
    primary = false,
    backgroundColor,
    size = 'large-box-title',
    label,
    ...props

}:TitleProps) => {
    const mode = primary ? 
    'storybook-title--primary' :
    'storybook-title--secondary';
    return (
        <div 
            className={['storybook-title', `storybook-title--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
        >
            {label}
        </div>
    )
}

export default Title
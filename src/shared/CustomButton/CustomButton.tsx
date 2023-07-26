import { ButtonHTMLAttributes } from 'react';
import cls from './CustomButton.module.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { className, children, ...otherProps} = props;

    return (
        <button 
            className={`${cls.CustomButton} ${className}`} 
            {...otherProps}
        >
            {children}
        </button>
    );
}
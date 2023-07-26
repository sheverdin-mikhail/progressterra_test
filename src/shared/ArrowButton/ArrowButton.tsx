import cls from './ArrowButton.module.scss';
import { ReactComponent as Arrow } from 'shared/icons/arrow-icon.svg';

interface ArrowButtonProps {
    className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = (props) => {

    return (
        <div className={cls.ArrowButton}>
            <Arrow/>
        </div>
    );
}
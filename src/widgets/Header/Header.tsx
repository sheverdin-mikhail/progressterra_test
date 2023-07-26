import cls from './Header.module.scss'
import { ReactComponent as Info } from 'shared/icons/info-icon.svg' 

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = () => {

    return (
        <div className={cls.Header}>
            <a href="/" className={cls.logo}>ЛОГОТИП</a>
            <Info />
        </div>
    );
}
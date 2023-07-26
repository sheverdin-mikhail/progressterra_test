import { ArrowButton } from 'shared/ArrowButton/ArrowButton';
import cls from './BonusInfoCard.module.scss';
import  { ReactComponent as Fire } from 'shared/icons/fire-icon.svg';



export interface IBonusData {
    value: number;
    date: string;
    burningBonuses: number
}

interface BonusInfoCardProps {
    className?: string;
    data: IBonusData | null;
}

export const BonusInfoCard: React.FC<BonusInfoCardProps> = (props) => {
    const { className, data } = props;

    return (
        <div className={`${cls.BonusInfoCard} ${className}`}>
           <div>
                <h2 className={cls.bonuses}>{data?.value ?? 0} бонусов</h2>
                <div className={cls.row}>
                    <span className={cls.lightText} >{data?.date ?? 0} сгорит</span>
                    <Fire className={cls.icon} />
                    <span className={cls.lightText} >{data?.burningBonuses ?? 0} бонусов</span>
                </div>
           </div>
           <ArrowButton />
        </div>
    );
}
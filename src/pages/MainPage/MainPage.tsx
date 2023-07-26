import { BonusInfoCard } from 'widgets/BonusInfoCard/BonusInfoCard';
import cls from './MainPage.module.scss';
import { useEffect } from 'react';
import { SpeechBlock } from 'widgets/SpeechBlock/SpeechBlock';
import { useGetApiData } from 'shared/hooks/useGetApiData/useGetApiData';

interface MainPageProps {
    className?: string;
}


export const MainPage: React.FC<MainPageProps> = (props) => {

    const {
        getToken,
        getBonuses,
        error,
        isError,
        bonusData
    } = useGetApiData()

    useEffect(() =>{
        getToken()
            .then(
                accessToken => getBonuses(accessToken)
            )
    },[])

    useEffect(()=>{
        if(isError){
            alert(error)
        }
    }, [isError])

    return (
        <>
            <div className={cls.MainPage}>
                <BonusInfoCard 
                    className={cls.card}
                    data={bonusData}
                 />
            </div>
            {/* Дополнительное задание с голосовым вводом */}
            <SpeechBlock />
        </>

    );
}
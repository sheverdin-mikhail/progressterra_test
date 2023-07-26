import { useEffect, useState } from 'react';
import cls from './SpeechBlock.module.scss';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CustomButton } from 'shared/CustomButton/CustomButton';
import { StartSpeach } from 'feautures/StartSpeach/StartSpeach';
import { useSpeachRecord } from 'feautures/SpeachRecord/SpeachRecord';

interface SpeechBlockProps {
    className?: string;
}


export const SpeechBlock: React.FC<SpeechBlockProps> = (props) => {

    const {
        data,
        setData,
        resetTranscript,
    } = useSpeachRecord()


    useEffect(()=>{
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            alert("Извините, но ваш браузер не поддерживает эту функцию!"); 
        }  
    },[])

    

    const handleReset = () => {
        setData([]);
        resetTranscript();
    };



    return (
        <div className={cls.SpeechBlock}>
            <p className={cls.text}>{data.length > 0 ? data.join(' ') : 'Начните запись для появления текста'}</p>
            <StartSpeach className={cls.btn} />
            <CustomButton className={cls.btn} onClick={SpeechRecognition.stopListening}>Закончить запись</CustomButton>
            <CustomButton className={cls.btn} onClick={handleReset}>Сбросить текст</CustomButton>

        </div>
    );
}
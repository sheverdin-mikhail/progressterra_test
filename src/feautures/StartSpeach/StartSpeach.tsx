import { CustomButton } from "shared/CustomButton/CustomButton";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


interface StartSpeachProps {
    className?: string;
}

export const StartSpeach: React.FC<StartSpeachProps> = (props) => {
    const { className } = props;


    function StartHandler(){
        SpeechRecognition.startListening({language: 'ru-RU', continuous: true})
        
    }

    return (
        <CustomButton className={className} onClick={StartHandler}>Начать запись</CustomButton>
    );
}
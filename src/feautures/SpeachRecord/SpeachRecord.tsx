import { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

interface SpeachRecordHook {
    data: string[];
    setData:  React.Dispatch<React.SetStateAction<string[]>>;
    resetTranscript: () => void;
}

export const useSpeachRecord = (): SpeachRecordHook => {
    const [ data, setData ] = useState<string[]>([])

    const { resetTranscript, transcript } = useSpeechRecognition()

    useEffect(()=>{
        if (transcript) {
            const newTranscriptionArr = transcript.split(' ')
            const newWord = `${newTranscriptionArr[newTranscriptionArr.length - 1]}${Math.floor(Math.random() * 100)}`;
            setData((prevWords) => [...prevWords, newWord]);
        }
    },[transcript])


    return {
        data,
        setData,
        resetTranscript
    }
}
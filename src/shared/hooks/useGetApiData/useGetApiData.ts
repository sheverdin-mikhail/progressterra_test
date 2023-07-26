import axios, { AxiosError } from "axios";
import { useState } from "react";
import { accessKey, bonusDataUrl, idClient, idDevice, tokenUrl } from "shared/configs/ApiConfig";
import { IBonusData } from "widgets/BonusInfoCard/BonusInfoCard";



export function useGetApiData(){

    const [ isError, setIsError ] = useState<boolean>(false)
    const [bonusData, setBonusData] = useState<IBonusData | null>(null)
    const [ error, setError ] = useState('')
    const [ token, setToken ] = useState('')

    //Получение данных с API о токене
    async function getToken(){
        try{
            const headers = {
                'AccessKey': accessKey
            }
        
            const data = {
                "idClient": idClient,
                "accessToken": "",
                "paramName": "device",
                "paramValue": idDevice,
                "latitude": 0,
                "longitude": 0,
                "sourceQuery": 0
            }
            const response = await axios.post(tokenUrl, data, {headers: headers})
            
            if(response.data.result.status === 0){
                setToken(response.data.accessToken)
                return response.data.accessToken
            }else{
                setError(response.data.result.message)
                setIsError(true)
            }
        }
        catch(error){
            const err = error as AxiosError<string>
            setError(err.response?.data ?? 'Unknown error')
            setIsError(true)
            return error
        }

    }

    //Получение данных с API по токену о бонусах 
    async function getBonuses(accessToken: string){
        const headers = {
            'AccessKey': accessKey
        }
        try{
            const response = await axios.get(`${bonusDataUrl}${accessToken}/`, {headers: headers})
            const date = new Date(response.data.data.dateBurning)
            const day = date.getDate().toString().padStart(2, '0')
            const month = (date.getMonth()+1).toString().padStart(2, '0')
            setBonusData({
                burningBonuses: response.data.data.forBurningQuantity,
                date: `${day}.${month}`,
                value: response.data.data.currentQuantity
            })
        }
        catch(error){
            return error
        }

    }

    return {
        getToken,
        getBonuses,
        isError,
        error,
        token,
        bonusData

    }
}
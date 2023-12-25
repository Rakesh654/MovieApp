import { useEffect } from "react"
import openAI from "../utils/openAI";

const useOpenai = () =>{

    useEffect(() => {
        getOpenAiResponse();
        }, [])

    const getOpenAiResponse = async ()=>
    {
        const chatCompletion = await openAI.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
          });
          
        console.log(chatCompletion);
    }
}

export default useOpenai;
import React, { useCallback, useState } from 'react'

const useCopyClipBoard = ({text} : {text : string}) => {
    const [copied, setCopied] = useState(false);
         
        const copyText = useCallback( async () => {
                    if(!navigator.clipboard){
                        console.warn("Your Browser Cant Support Clipboard!")
                    }
        },[text])

}

export default useCopyClipBoard
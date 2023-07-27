import React, { useCallback, useState } from 'react';

const useCopyClipBoard = (text : string) : [boolean, () => Promise<void>] => {
  const [copied, setCopied] = useState(false);

  const copyText = useCallback(async () => {
    if (!navigator.clipboard) {
      console.warn('Your Browser Cant Support Clipboard!');
      setCopied(false);
      
    }
    else {

        try {
          const response = await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2024);
        } catch (e) {
          console.warn(e);
          setCopied(false);
        }
    }
  }, [text]);

  return [copied, copyText];
};

export default useCopyClipBoard;

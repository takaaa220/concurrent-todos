import { useState, useEffect, useRef, useCallback } from "react";

export const useMarkdown = () => {
  const [markedText, setMarkedText] = useState("");
  const worker = useRef(new Worker("./index.ts"));

  const marked = useCallback((value: string) => {
    worker.current.postMessage(value);
  }, []);

  const receiveMessage = useCallback(
    (e: MessageEvent) => {
      setMarkedText(e.data as string);
    },
    [setMarkedText],
  );

  useEffect(() => {
    worker.current.addEventListener("message", receiveMessage);

    return () => worker.current.removeEventListener("message", receiveMessage);
  }, []);

  return {
    markedText,
    marked,
  };
};

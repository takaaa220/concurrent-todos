import { useRef, useCallback } from "react";
import { sanitize } from "dompurify";

export const useMarkdown = (): ((value: string) => Promise<string>) => {
  const worker = useRef(new Worker("./index.ts"));

  const marked = useCallback((value: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const receiveMessage = (e: MessageEvent) => {
        worker.current.removeEventListener("message", receiveMessage);

        // @TODO: sanitizeもweb worker内に入れたい
        resolve(sanitize(sanitize(e.data)));
      };

      const receiveError = (e: ErrorEvent) => {
        console.error(e);
        reject("error");
      };

      worker.current.postMessage(value);

      worker.current.addEventListener("message", receiveMessage);
      worker.current.addEventListener("error", receiveError);
    });
  }, []);

  return marked;
};

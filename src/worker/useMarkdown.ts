import { useCallback } from "react";
import { sanitize } from "dompurify";

export const useMarkdown = (worker: Worker): ((value: string) => Promise<string>) => {
  const marked = useCallback((value: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const receiveMessage = (e: MessageEvent) => {
        worker.removeEventListener("message", receiveMessage);

        // @TODO: sanitizeもweb worker内に入れたい
        resolve(sanitize(sanitize(e.data)));
      };

      const receiveError = (e: ErrorEvent) => {
        console.error(e);
        reject("error");
      };

      worker.postMessage(value);

      worker.addEventListener("message", receiveMessage);
      worker.addEventListener("error", receiveError);
    });
  }, []);

  return marked;
};

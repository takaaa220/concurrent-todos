import marked from "marked";
// importScripts("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js");

// marked.setOptions({
//   highlight: function (code) {
//     return hljs.highlightAuto(code).value;
//   },
// });

onmessage = function (event: MessageEvent) {
  marked(event.data, (err: Error, content: string) => {
    if (err) throw err;

    postMessage(content);
  });
};

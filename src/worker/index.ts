import marked from "marked";

// @TODO: highlight当てる
marked.setOptions({
  sanitize: true,
});

onmessage = function (event: MessageEvent) {
  marked(event.data, (err: Error, content: string) => {
    if (err) throw err;

    postMessage(content);
  });
};

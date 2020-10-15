export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
    headers: {
      accept: "text/html",
    },
    credentials: "same-origin",
  })
    .then((data) => data.json())
    .then((data) => [data.origin, data.author, data.content]);
};

self.addEventListener("install", () => {
  console.log("start install");
});

self.addEventListener("fetch", (event) => {
  console.log('Handling fetch event for', event.request.url);
  const requestUrl = new URL(event.request.url);
  console.log(requestUrl);
});

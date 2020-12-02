if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      console.log(registration);
    } catch(e) {
      console.log("fail");
      console.log(e);
    }
  });
}

const rootEl = document.getElementById("app");

rootEl.innerHTML = `
<section>
  <h1>Hello World</h1>
  <div>foooooo</div>
</section>
`;

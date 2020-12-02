if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", { scope: "/" });
      console.log(registration);
    } catch(e) {
      console.log("fail");
      console.log(e);
    }
  });
}

document.getElementById("app").innerHTML = `
<section>
  <h1>Hello World</h1>
  <div>
    <ul id="js-tasks">
      <li>foo</li>
    </ul>
    <button id="js-button" type="button">リクエスト</button>
  </div>
</section>
`;

const buttonEl = document.getElementById("js-button");
const tasksUlEl = document.getElementById("js-tasks");
buttonEl.addEventListener("click", async (event) => {
  try {
    const response = await fetch("./api/tasks/1");
    console.log(response.json());
  } catch(e) {
    console.log(e);
  }
});

// @ts-ignore
import { a, lazy } from "a";
// @ts-ignore
import { B } from "b";
import { render } from "preact";

render(
  <>
    <B />
    <span>xxx</span>
  </>,
  document.getElementById("app")!
);

(async () => {
  const mod = await lazy();
  console.log(a, mod.default("const xxxx     = 1"));
})();

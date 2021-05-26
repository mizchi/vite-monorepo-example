import { h } from "preact";
import { useEffect } from "preact/hooks";
export function B() {
  useEffect(() => {
    console.log("b monuted");
  }, []);
  return h("div", null, "b");
}

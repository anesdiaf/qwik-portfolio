import { component$, useStylesScoped$ } from "@builder.io/qwik";
import SideMailStyles from "./sidemail.css?inline";

export const SideMail = component$(() => {
  useStylesScoped$(SideMailStyles);
  //
  return (
    <div>
      <a href="mailto:realanesdiaf@gmail.com">{"realanesdiaf@gmail.com"}</a>
    </div>
  );
});
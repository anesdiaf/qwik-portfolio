import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ColorfulStyles from "./colorful.css?inline";


export const Colorful = component$(() => {

    useStylesScoped$(ColorfulStyles);

  return (
      <div>
        <div className="spot-1"></div>
        <div className="spot-2"></div>
        <div className="spot-3"></div>
      </div>
  );
});
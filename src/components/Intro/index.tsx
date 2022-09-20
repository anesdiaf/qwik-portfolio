import { component$, useStylesScoped$ } from "@builder.io/qwik";
import introStyles from "./intro.css?inline";

export const Intro = component$(() => {
  useStylesScoped$(introStyles);
  return (
    <section id="Intro">
      <div>
        <p className="greeting">Hi, my name is</p>
        <p className="name">
          <span>{"< "}</span>
          Anes Diaf
          <span>{" />"}</span>
        </p>
        <p className="job">I Build Apps for fun</p>
        <p className="intro">I'm a Software Engineer, I Design & Develop Accessible, Elegant Apps using modern tech stacks.</p>
      </div>
    </section>
  );
});
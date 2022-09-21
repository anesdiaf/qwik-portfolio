import { component$, useStylesScoped$ } from "@builder.io/qwik";
import introStyles from "./intro.css?inline";

export const Intro = component$(() => {
  useStylesScoped$(introStyles);
  return (
    <section id="Intro">
      <div className="container">
        <div className="head">
          <p className="greeting">Hi, my name is</p>
          <p className="name">
            <span>{"< "}</span>
            Anes Diaf
            <span>{" />"}</span>
          </p>
          <p className="job">I'm a Software Engineer</p>
          <p className="intro">I Design & Develop Accessible, Elegant Apps using modern tech stacks.</p>
        </div>
        <div className="bottom">
          <button className="contact">Get in touch</button>
          <button className="work">See my work</button>
        </div>
      </div>
    </section>
  );
});
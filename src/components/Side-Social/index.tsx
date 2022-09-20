import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { socialLinks } from "./socialLinks";
import SideSocialStyles from "./sidesocial.css?inline";


export const SideSocial = component$(() => {
  useStylesScoped$(SideSocialStyles);
  return (
    <div>
        {socialLinks.map(link => {
            const {id, title, url, icon} = link;
            return (
                <a href={url} key={id}>
                    <img src={icon} alt={title} />
                </a>
            )
        })}
    </div>
  );
});
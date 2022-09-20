import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { navLinks } from './links';
import navbarStyles from "./navbar.css?inline"
export const Navbar = component$(() => {
  useStylesScoped$(navbarStyles);
  
  return (
    <nav>
      <a href='/' className='brand' 
      onClick$={() => {window.scroll(0,0)}}>
        Anes<span className='brand-colored'>.Dev</span>
      </a>
      <ul>
        {navLinks.map(navlink => {
          //const id: number = navlink.id;
          //const title: string = navlink.title;
          //const url: string = navlink.url;

          const {id, title, url} = navlink;
          return(
            <li>
              <span>{id}.</span>
              <a href={url}>{title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
});
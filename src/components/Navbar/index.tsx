import { component$, useStylesScoped$, $, useStore } from '@builder.io/qwik';
import { navLinks } from './links';
import navbarStyles from "./navbar.css?inline"
import { socialLinks } from "../Side-Social/socialLinks";

export const Navbar = component$(() => {
  useStylesScoped$(navbarStyles);
  const state = useStore({
    isMenu: false,
  }, { recursive: true });
  
  return (
    <nav>
      <div className="container">
      <a href='#' className='brand' 
      onClick$={() => {window.scroll(0,0)}}>
        Anes<span className='brand-colored'>.Dev</span>
      </a>
      <ul>
        {navLinks.map(navlink => {
          const {id, title, url} = navlink;
          return(
            <li>
              <span>{id}.</span>
              <a href={url}>{title}</a>
            </li>
          )
        })}
      </ul>
      <button 
      onClick$={() => {state.isMenu = !state.isMenu}} 
      className={state.isMenu ? "nav-menu close" : "nav-menu open"}
      aria-label="nav-menu-btn">

      </button>
      <div className={state.isMenu ? "mobile-menu active" : "mobile-menu inactive"}>
        <div className="mobile-links">
          {navLinks.map(navlink => {
            const {id, title, url} = navlink;
            return(
              <a 
              onClick$={() => {state.isMenu = false}}  
              href={url}>
                <span>{id}.</span>
                {title}
              </a>
            )
          })}
        </div>
        <div className="mobile-socials">
          {socialLinks.map(link => {
            const {id, title, icon, url} = link;
            return(
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={title} width="128" height="128"/>
              </a>
            )
          })}
        </div>
      </div>
      </div>
    </nav>
  );
});
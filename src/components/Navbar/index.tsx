import { component$, useStylesScoped$, $, PropFunction, useStore } from '@builder.io/qwik';
import { navLinks } from './links';
import navbarStyles from "./navbar.css?inline"

interface NavbarProps {
  
}

export const Navbar = component$(() => {
  useStylesScoped$(navbarStyles);
  
  const state = useStore({
    playing : false
  });


  return (
    <nav>
      <a href='#' className='brand' 
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
        <p onClick$={() => {
          state.playing = !state.playing
        }}>{state.playing ? "Pause" : "Play"}</p>
      </ul>
      <audio id='audio' src="https://cdn.pixabay.com/download/audio/2022/09/17/audio_e51d19a2b1.mp3?filename=pentatonic-longing-short-theme-120249.mp3"></audio>
    </nav>
  );
});
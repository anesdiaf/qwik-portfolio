import { component$ } from '@builder.io/qwik';
import { About, Career, Colorful, Contact, Intro, Navbar, SideMail, SideSocial, Work } from '~/components';

export default component$(() => {
  
  return (
    <>
      <Colorful/>
      <main>
        <Navbar/>
        <div className='main-div'>
          <Intro/>
          <About/>
          <Career/>
          <Work/>
          <Contact/>
        </div>
        <footer>
          &copy; {new Date().getFullYear()} <a href="http://anesdiaf.me" target="_blank" rel="noopener noreferrer">Anes Diaf</a>
        </footer>
      </main>
      <div>
        <SideSocial/>
        <SideMail/>
      </div>

    </>
  );
});

import { component$ } from '@builder.io/qwik';
import { About, Career, Colorful, Intro, Navbar, SideMail, SideSocial } from '~/components';

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
        </div>
      </main>
      <div>
        <SideSocial/>
        <SideMail/>
      </div>
      <footer>
        
      </footer>
    </>
  );
});

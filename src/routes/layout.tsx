import { component$ } from '@builder.io/qwik';
import { Colorful, Intro, Navbar, SideSocial } from '~/components';

export default component$(() => {
  return (
    <>
      <Colorful/>
      <main>
        <Navbar/>
        <SideSocial/>
        <div className='main-div'>
          <Intro/>
        </div>
      </main>
      <footer>
        
      </footer>
    </>
  );
});

import { component$ } from '@builder.io/qwik';
import { Intro, Navbar } from '~/components';

export default component$(() => {
  return (
    <>
      <main>
        <Navbar/>
        <div className='main-div'>
          <Intro/>
        </div>
      </main>
      <footer>
        <a href="https://www.anesdiaf.me" target="_blank">
          Made with ♡ by Anes Diaf
        </a>
      </footer>
    </>
  );
});

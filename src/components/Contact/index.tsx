import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ContactStyles from "./contact.css?inline";


export const Contact = component$(() => {
    useStylesScoped$(ContactStyles);
  return (
    <section id="Contact">
        <div className="container"> 
            <p className="section-title">Contact me</p>
            <div className="content">
                <form>
                    <div className='form-container'>
                        <div className="inputs">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" />
                            </div>
                        </div>
                        <div className="text-area">
                            <label htmlFor="mail-content">Content</label>
                            <textarea name="mail-content" id="mail-content" rows={11}></textarea>
                        </div>
                    </div>
                    <button preventdefault:click className="send-btn" aria-label="send-mail-btn">Send</button>
                </form>
            </div>
        </div>
    </section>
  );
});
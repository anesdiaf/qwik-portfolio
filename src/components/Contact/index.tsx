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
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="">Subject</label>
                                <input type="text" name="subject" id="subject" />
                            </div>
                        </div>
                        <div className="text-area">
                            <label htmlFor="">Content</label>
                            <textarea name="content" id="content" cols={30} rows={11}></textarea>
                        </div>
                    </div>
                    <button className="send-btn">Send</button>
                </form>
            </div>
        </div>
    </section>
  );
});
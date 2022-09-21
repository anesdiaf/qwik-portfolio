import { component$, useStylesScoped$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";
import { resume, techs } from "./constants";

export const About = component$(() => {
  useStylesScoped$(AboutStyles);
  const {Backend, Frontend, Langs} = techs;
  return (
    <section id="About">
      <div className="container">
        <p className="section-title">About me</p>
        <div className="content">
          <div className="profile-pic">
            <img 
            src="https://res.cloudinary.com/anes/image/upload/v1660602699/anes_neicdq.avif" 
            alt="profile-pic" 
            width="600"
            height="600"/>
          </div>
          <div className="profile-info">
            <p className="resume">{resume}</p>
            <div className="skills">
              <p>These Are the technologies i'm using now :</p>
              <div>
                <p className="title">Languages:</p>
                <ul>{Langs.map(lang => {
                  return(
                    <li>
                      <span>{">"}</span>
                      <p>{lang}</p>
                    </li>
                  )
                })}
                </ul>
              </div>
              <div>
                <p className="title">Frontend:</p>
                <ul>{Frontend.map(skill => {
                  return(
                    <li>
                      <span>{"> "}</span>
                      <p>{skill}</p>
                    </li>
                  )
                })}
                </ul>
              </div>
              <div>
                <p className="title">Backend:</p>
                <ul>{Backend.map(skill => {
                  return(
                    <li>
                      <span>{"> "}</span>
                      <p>{skill}</p>
                    </li>
                  )
                })}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
});
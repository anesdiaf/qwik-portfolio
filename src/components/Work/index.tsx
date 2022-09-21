import { component$, useStylesScoped$ } from '@builder.io/qwik';
import WorkStyles from "./work.css?inline";
import FeaturedProjects from "./FeaturedProjects.js";
import OtherProjects from "./OtherProjects.js";

export const Work = component$(() => {
  useStylesScoped$(WorkStyles);
  const featuredProjets = FeaturedProjects;
  const otherProjects = OtherProjects;
  return (
    <section id="Work">
      <div className="container">
        <p className="section-title">my works</p>

            <p className="title">Featured Projects</p>
                  <div className="featured-projects">
                    {featuredProjets.map(project => {
                      const {id, title, image, description:desc, techs, link, git_link} = project;
                      return (
                        <div className="project-main">
                          <div className="image"><img src={image} alt="" /></div>
                          <div className="data">
                            <div className="title-l">
                              <p className="badge">Featured Project</p>
                              <a className="project-title">{title}</a>
                            </div>
                            <div className="description">
                              {desc}
                            </div>
                            <div className="techs">
                              {techs.map(tech => {
                                return (
                                  <p className="tech">{tech}</p>
                                )
                              })}
                            </div>
                            <div className="links">
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src="/assets/ui-icons/link-icon.svg" alt="" />
                              </a>
                              {git_link === '' ? "" : (
                                <a href={git_link} target="_blank" rel="noopener noreferrer">
                                  <img className="link-icon" src="/assets/social-icons/github-icon.svg" alt="" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
          <p className="title">Other Projects</p>
          <div className="other-projects">
            {otherProjects.map(project => {
              const {id, title, description:desc, techs, link, git_link} = project;
              return(
                <div className="other-project">
                  <div className="upper-section">
                    <img className="folder-icon" src="/assets/ui-icons/folder-icon.svg" alt="" />
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img className="link-icon" src="/assets/ui-icons/link-icon.svg" alt="" />
                    </a>
                    {git_link === '' ? "" : (
                      <a href={git_link} target="_blank" rel="noopener noreferrer">
                        <img className="link-icon" src="/assets/social-icons/github.svg" alt="" />
                      </a>
                    )}
                  </div>
                  <div className="bottom-section">
                      <p className="sub-title">{title}</p>
                      <p className="sub-description">{desc}</p>
                      <div className="sub-techs">
                        {techs.map(tech => (
                          <p className="sub-tech">{tech}</p>
                        ))}
                      </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </section>
  );
});
import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import CareerStyles from "./career.css?inline";
import Data from "./Data";


export const Career = component$(() => {

    useStylesScoped$(CareerStyles);

    const State = useStore({
      index : 0
    });

    const { date, role, tasks} = Data[State.index]
  
  
  return (
    <section id="Experience">
      <div className="container">
        <p className="section-title">Where i've worked</p>
        <div className="content">
                <div className="job-list">
                    {Data.map(job => {
                        const {id, Co} = job;
                        return(
                            <button
                            className={id == State.index ? "job active" : "job inactive"}
                            onClick$={() => {State.index = id}}>
                                {Co}
                            </button>
                        )
                    })}
                </div>
            <div className="job-data">
                <p className="role">{role}</p> 
                <p className="date">{date}</p> 
                <div className="tasks">
                    {tasks.map(task => {
                    return(
                        <p>{">"} {task}</p>
                    )
                    })}
                </div> 
            </div>
        </div>
      </div>
    </section>
  );
});
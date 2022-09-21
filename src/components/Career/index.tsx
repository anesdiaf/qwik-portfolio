import { component$, useStylesScoped$, useStore, useWatch$ } from "@builder.io/qwik";
import CareerStyles from "./career.css?inline";
import Data from "./Data";
export const Career = component$(() => {

  useStylesScoped$(CareerStyles);

  const State = useStore({
    index : 0
  });
  
  const { Co, date, role, tasks} = Data[State.index]
  
  useWatch$(({ track }) => {
    track(State, 'index');

    console.log(State.index);
    
    
  });
  
  return (
    <section id="Experience">
      <div className="container">
        <p className="section-title">Where i've worked</p>
        <div className="content">
            <div onClick$={() => {
                State.index == 0 ? State.index = 1 : State.index = 0;
            }} className="job-list">
                {Data.map(job => {
                    return(
                        <button 
                        className={job.id == State.index ? "active" : "inactive"}
                        onClick$={() => State.index == 2}>
                            {job.Co}
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
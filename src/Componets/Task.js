import React from "react";
import "./Task.css";

const Task = () => {
  return (
    <div className="task">
      <div className="top">
        <h1>Technical Project Management</h1>
        <button>Submit task</button>
      </div>

      <div className="bottom">
        <h3>Explore the world of management</h3>
        <p>
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
    </div>
  );
};

export default Task;

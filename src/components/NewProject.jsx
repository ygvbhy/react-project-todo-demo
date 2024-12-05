import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" id="title" />
        <Input label="Description" id="description" textarea />
        <Input label="Due Date" id="dueDate" />
      </div>
    </div>
  );
};

export default NewProject;

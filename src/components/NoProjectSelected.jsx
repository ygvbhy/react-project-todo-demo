import React from "react";
import noProjectSelected from "../assets/no-projects.png";
import Button from "./Button";

// 프로젝트 선택 안된 경우 화면
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        src={noProjectSelected}
        alt="No Project Selected"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;

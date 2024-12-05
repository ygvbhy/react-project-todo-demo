import React, { useState } from "react";

const ProjectInformation = ({ project, setTask }) => {
  // 태스크 상태
  const [tasks, setTasks] = useState({
    id: "",
    title: "",
  });

  // 태스크 추가 함수
  const handleClick = () => {
    const newProject = { ...project };
    newProject.tasks.push(tasks);
    setTask(newProject);
    setTasks({
      id: "",
      title: "",
    });
  };

  // 태스크 변경 함수
  const handleChange = (e) => {
    setTasks({
      ...tasks,
      title: e.target.value,
      id: Math.floor(Math.random() * 1000000),
    });
  };

  // 태스크 삭제 함수
  const handleDeleteTask = (id) => {
    console.log(id);
    console.log(project.tasks);

    const newProject = { ...project };
    newProject.tasks = newProject.tasks.filter((t) => {
      console.log(t);

      return t.id !== id;
    });
    console.log(newProject.tasks);

    setTask(newProject);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">{project.title}</h1>
      <h2 className="text-2xl font-bold text-center my-6">
        {project.description}
      </h2>
      <h3 className="text-2xl font-bold text-center my-6">{project.date}</h3>
      <div>
        <h4 className="text-2xl font-bold my-6">Task Add</h4>
        <div className="mb-6 w-[300px]">
          <div className="mb-6">
            <label
              htmlFor="Tasks"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tasks
            </label>
            <input
              type="text"
              id="Tasks"
              placeholder="Project Tasks"
              value={tasks.title}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Add Task
          </button>
        </div>
        <h4 className="text-2xl font-bold my-6">Tasks</h4>
        {project.tasks.map((task) => (
          <div key={task.id}>
            <p>
              <span className="font-bold">{task.title}</span>
              <span
                onClick={() => handleDeleteTask(task.id)}
                className="cursor-pointer inline-flex items-center justify-center w-10 h-3 p-3 ms-3 text-sm font-medium bg-blue-100 rounded-full text-black"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectInformation;

import React from "react";

const Sidebar = ({ projects, onDeleteProject, selectProject }) => {
  const handleProjectClick = (project) => {
    // 프로젝트 상세 정보
    selectProject(project);
  };

  const handleDeleteProject = (e, project) => {
    // 프로젝트 삭제
    e.stopPropagation();
    onDeleteProject(project);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-gray-200"
        aria-label="Sidebar"
      >
        <div className="cursor-pointer h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
          <div
            className="flex items-center ps-2.5 mb-5"
            onClick={() => selectProject(null)}
          >
            <img
              src="/public/logo.png"
              className="h-6 me-3 sm:h-7"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Create Project
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            {projects.map((project) => (
              <li
                onClick={() => handleProjectClick(project)}
                key={project.id}
                className="hover:bg-gray-300 cursor-pointer rounded-md p-2 flex items-center justify-between"
              >
                <div>{project.title}</div>
                <span
                  onClick={(e) => handleDeleteProject(e, project)}
                  className="inline-flex items-center justify-center w-10 h-3 p-3 ms-3 text-sm font-medium bg-blue-100 rounded-full text-black"
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
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

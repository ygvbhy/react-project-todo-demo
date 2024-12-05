import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import ProjectInformation from "./components/ProjectInformation";

function App() {
  // 사이드바 보낼 내용
  const [projects, setProjects] = useState([]);
  // 프로젝트 task 정보 저장 할 state
  const [projectTaskInfo, setProjectTaskInfo] = useState([]);
  // 프로젝트 생성 함수
  const [project, setProject] = useState({
    title: "",
    description: "",
    date: "",
  });
  // 현재 선택한 프로젝트 정보
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleDeleteProject = (project) => {
    setProjects(projects.filter((p) => p.title !== project.title));
  };

  const handleSelectProject = (title) => {
    setSelectedProject(title);
  };

  return (
    <>
      <Sidebar
        projects={projects}
        onDeleteProject={handleDeleteProject}
        selectProject={handleSelectProject}
      />
      <section className="p-4 sm:ml-64">
        {selectedProject === null ? (
          <CreateProject
            onCreateProject={handleCreateProject}
            project={project}
            setProject={setProject}
          />
        ) : (
          <ProjectInformation />
        )}
      </section>
    </>
  );
}

export default App;

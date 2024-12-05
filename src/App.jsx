import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import ProjectInformation from "./components/ProjectInformation";

function App() {
  // 사이드바 보낼 내용
  const [projects, setProjects] = useState([]);
  // 프로젝트 생성 함수
  const [project, setProject] = useState({
    title: "",
    description: "",
    date: "",
    id: "",
    tasks: [],
  });
  // 현재 선택한 프로젝트 정보
  const [selectedProject, setSelectedProject] = useState(null);

  // 프로젝트 생성 함수
  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  // 태스크 추가 함수
  const handleSetTask = (project) => {
    setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    handleSelectProject(project);
  };

  // 프로젝트 삭제 함수
  const handleDeleteProject = (project) => {
    setProjects(projects.filter((p) => p.id !== project.id));
  };

  // 프로젝트 선택 함수
  const handleSelectProject = (project) => {
    setSelectedProject(project);
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
          <ProjectInformation
            project={selectedProject}
            setTask={handleSetTask}
          />
        )}
      </section>
    </>
  );
}

export default App;

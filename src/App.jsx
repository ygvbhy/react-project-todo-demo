import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  // 프로젝트 상태
  // selectedProjectId : 프로젝트 추가 및 선택 여부
  // projects : 프로젝트 목록
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // 태스크 추가 함수
  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  // 태스크 삭제 함수
  const handleDeleteTask = (taskId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  // 프로젝트 선택 함수
  const handleSelectProject = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  // 사이드바 및 프로젝트 추가 버튼 클릭시 프로젝트 생성 페이지 전환 조건 변경 함수
  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  // 프로젝트 생성 취소 함수
  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  // 프로젝트 생성 함수
  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  // 프로젝트 삭제 함수
  const handleDeleteProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  // 선택된 프로젝트 찾기
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // 프로젝트 생성 페이지 조건 변경 함수
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen  my-8 flex gap-8 ">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

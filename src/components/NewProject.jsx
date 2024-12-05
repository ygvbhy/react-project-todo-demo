import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

// 프로젝트 생성 컴포넌트
const NewProject = ({ onAddProject, onCancel }) => {
  // 모달 참조
  const modalRef = useRef();
  // 입력 참조
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  // 프로젝트 생성 함수 및 참조 값 저장
  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      // 입력 값 검증
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // 검증 불합시 모달 오픈
      modalRef.current.open();
      return;
    }

    // 프로젝트 생성 함수 호출
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" id="title" ref={titleRef} />
          <Input
            label="Description"
            id="description"
            textarea
            ref={descriptionRef}
          />
          <Input type="date" label="Due Date" id="dueDate" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;

import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

// forwardRef 를 사용하면 컴포넌트가 ref.를 사용하여 부모 컴포넌트의 DOM 노드를 노출할 수 있습니다.
// createPortal을 사용하면 일부 자식을 DOM의 다른 부분으로 렌더링할 수 있습니다.

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  // 모달 참조
  const dialogRef = useRef();
  // 모달 오픈 함수 저장
  useImperativeHandle(ref, () => {
    return {
      // 모달 오픈 함수
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

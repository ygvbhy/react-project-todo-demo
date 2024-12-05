import { forwardRef } from "react";

// input 재사용 컴포넌트
const Input = forwardRef(({ textarea, label, ...props }, ref) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={props.id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} ref={ref} />
      ) : (
        <input type="text" {...props} className={classes} ref={ref} />
      )}
    </p>
  );
});

export default Input;

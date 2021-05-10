import React from "react";

const ComponentStructure = () => {
  return (
    <div className="">
      <h3 className="group flex whitespace-pre-wrap" id="auto">
        <span>
          Example <code>Checkbox</code> component:
        </span>
      </h3>
      <p>
        <pre>
          {`<div className="flex items-start">
  <div className="flex items-center h-5">
    <input
      id={name}
      name={name}
      type="checkbox"
      className="focus:ring-action-primary h-4 w-4 text-primary border-primary"
    />
  </div>
  {label && (
    <div className="ml-3 text-sm">
      <label
        htmlFor={name}
        className="text-paragraph-small text-black dark:text-white"
      >
        {label}
      </label>
      {subLabel && <p className="text-neutral-500">{subLabel}</p>}
    </div>
  )}
</div> `}
        </pre>
      </p>
    </div>
  );
};

export default ComponentStructure;

import React, { Fragment } from "react";

const Member = (props) => {
  const {
    name,
    age,
    children,
    gender,
    isChildrenVisible,
    toggleChildren,
  } = props;

  return (
    <Fragment>
      <h2
        style={{
          backgroundColor: age > 40 ? "red" : "blue",
        }}
      >
        {gender ? <strong>Sister</strong> : <strong>Brother</strong>}:{" "}
        {name.toUpperCase()} ({age} ans)
      </h2>
      <div
        className="children"
        style={{
          display: isChildrenVisible ? "block" : "none",
        }}
      >
        {children ? (
          <span className="has-children">
            Les enfants de {name} sont: {children}
          </span>
        ) : (
          <span className="no-children">{name} n'a pas d'enfants</span>
        )}
      </div>
      <button onClick={toggleChildren}>
        {isChildrenVisible ? "hide" : "show"}
      </button>
    </Fragment>
  );
};

export default Member;

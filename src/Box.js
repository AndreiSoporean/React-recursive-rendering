import React, { useEffect, useRef } from "react";

import "./Box.css";

const Box = ({ value, data, className, onClick, parentIncrementCount }) => {
  const renderCount = useRef(1);

  const incrementCount = () => {
    renderCount.current += 1;

    if (parentIncrementCount) {
      parentIncrementCount();
    }
  };

  useEffect(() => {
    incrementCount();
  });

  return (
    <div className={className} onClick={onClick}>
      <div className="info">
        <p>{value}</p>
        <span>{`Rendered ${renderCount.current} times`}</span>
      </div>
      <div className="wrapper">
        {data &&
          data.map((child) => {
            if (!child.children) {
              return (
                <Box
                  className="box leaf"
                  key={child.value}
                  value={child.value}
                  treeLeaf
                  onClick={() => alert("You clicked on the last node (leaf)")}
                  parentIncrementCount={incrementCount}
                />
              );
            }

            return (
              <Box
                className="box"
                key={child.value}
                value={child.value}
                data={child.children}
                parentIncrementCount={incrementCount}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Box;

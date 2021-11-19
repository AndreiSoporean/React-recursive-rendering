import React, { useEffect, useRef } from "react";

const Input = ({ value }) => {
  const ref = useRef(0);

  useEffect(() => {
    ref.current = ref.current + 1;
  });
  return <div>{`${value} was rendered ${ref.current} times`}</div>;
};

export default Input;

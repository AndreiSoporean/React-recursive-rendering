import { useState } from "react";
import "./App.css";
import Box from "./Box";

const treeData = {
  value: "1",
  children: [
    {
      value: "2",
      children: [{ value: "4" }, { value: "5" }],
    },
    {
      value: "3",
      children: [
        {
          value: "6",
          children: [
            { value: "new val 1", children: [{ value: "new val deep" }] },
          ],
        },
        {
          value: "7",
          children: [{ value: "new val 2" }],
        },
      ],
    },
  ],
};

const getTreeDepth = (root) =>
  root.children
    ? 1 + Math.max(...root.children.map((child) => getTreeDepth(child)))
    : 1;

function App() {
  const [count, setCount] = useState(0);

  const renderParent = () => setCount(count + 1);

  return (
    <div className="App">
      <h3>{`Tree Depth: ${getTreeDepth(treeData)}`}</h3>
      <div className="wrapper">
        <Box className="box" value={treeData.value} data={treeData.children} />
      </div>
      <button onClick={renderParent}>Render parent</button>
    </div>
  );
}

export default App;

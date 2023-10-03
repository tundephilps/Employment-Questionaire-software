//import { Input, Select } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
//import { IoMdClose } from "react-icons/io";
import Selector from "./Selector";

const AddQuestion = () => {
  const [components, setComponents] = useState<React.ReactElement[]>([]);
  const [componentKey, setComponentKey] = useState(0); // Key to force re-render

  // const [selectedValue, setSelectedValue] = useState<string>("");

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(event.target.value);
  // };

  const addQuestion = () => {
    const newComponents = [
      ...components,
      <div
        key={componentKey} // Key to force re-render
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "42px 32px",
          gap: 24,
        }}
      >
        <Selector />
      </div>,
    ];
    setComponents(newComponents);
    setComponentKey((prevKey) => prevKey + 1); // Increment the key
  };

  return (
    <div>
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      {/* Add Question */}
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          left: "5%",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            paddingTop: 20,
            position: "sticky",
          }}
          onClick={addQuestion}
        >
          <FaPlus style={{ fontSize: "24px" }} />
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              fontWeight: "600",
              color: "#000",
              display: "inline-block",
              width: "139px",
            }}
          >
            Add a question
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;

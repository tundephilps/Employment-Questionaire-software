import React, { useState } from "react";
import { Select } from "antd";
import DropdownSelect from "./Questions/DropdownSelect";
import MultipleSelect from "./Questions/MultipleSelect";
import ParagraphSelect from "./Questions/ParagraphSelect";
import YesNoSelector from "./Questions/YesNoSelector";
import VideoSelector from "./Questions/VideoSelector";

const { Option } = Select; // Import Option from antd's Select

const Selector: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Select
        style={{
          width: "100%",
          height: "68px",
          boxSizing: "border-box",
          border: "1px solid #000",
          position: "relative",
          borderRadius: "5px",
        }}
        value={selectedValue}
        onChange={handleChange}
      >
        <Option value="Paragraph">Paragraph</Option>
        <Option value="Short answer">Short answer</Option>

        <Option value="Yes/No">Yes/No</Option>
        <Option value="Dropdown">Dropdown</Option>
        <Option value="Multtple choice">Multtple choice</Option>

        <Option value="Number">Number</Option>
        <Option value="File upload">File upload</Option>

        <Option value="Video question">Video question</Option>
        {/* Add more options as needed */}
      </Select>
      {selectedValue === "Paragraph" ? (
        <ParagraphSelect />
      ) : selectedValue === "Short answer" ? (
        <DropdownSelect />
      ) : selectedValue === "woman" ? (
        <textarea placeholder="Enter text" />
      ) : selectedValue === "Yes/No" ? (
        <YesNoSelector />
      ) : selectedValue === "Dropdown" ? (
        <DropdownSelect />
      ) : selectedValue === "Multtple choice" ? (
        <MultipleSelect />
      ) : selectedValue === "Number" ? (
        <ParagraphSelect />
      ) : selectedValue === "File upload" ? (
        <ParagraphSelect />
      ) : selectedValue === "Video question" ? (
        <VideoSelector />
      ) : null}
    </div>
  );
};

export default Selector;

import React, { useState } from "react";
import { Input } from "antd";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

interface DivData {
  id: number;
  choiceName: string;
  inputValue: string;
}

const MultipleChoice: React.FC = () => {
  const [divsData, setDivsData] = useState<DivData[]>([
    {
      id: 1,
      choiceName: "Choice 1",
      inputValue: "",
    },
  ]);

  const handleAddDiv = () => {
    const newId = divsData.length + 1;
    const newDiv: DivData = {
      id: newId,
      choiceName: `Choice ${newId}`,
      inputValue: "",
    };

    setDivsData([...divsData, newDiv]);
  };

  const handleInputChange = (id: number, value: string) => {
    const updatedDivsData = divsData.map((div) =>
      div.id === id ? { ...div, inputValue: value } : div
    );
    setDivsData(updatedDivsData);
  };

  return (
    <div>
      {divsData.map((div) => (
        <div
          key={div.id}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
            width: "80%",
            paddingTop: 24,
          }}
        >
          <div>
            <AiOutlineUnorderedList style={{ marginTop: 24 }} />
          </div>
          <div>
            <div
              style={{
                position: "relative",
                fontSize: "20px",
                lineHeight: "114%",
                fontWeight: "600",
                color: "black",
                textAlign: "left",
                display: "inline-block",
                width: "420px",
                height: "30px",
              }}
            >
              {div.choiceName}
            </div>
            <Input
              style={{
                height: "68px",
                boxSizing: "border-box",
                border: "1px solid #000",
                position: "relative",
                width: "100%",
                borderRadius: "5px",
              }}
              placeholder="Type here"
              value={div.inputValue}
              onChange={(e) => handleInputChange(div.id, e.target.value)}
            />
          </div>
          <div>
            <BsPlus
              style={{ marginTop: 24, cursor: "pointer" }}
              onClick={handleAddDiv}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;

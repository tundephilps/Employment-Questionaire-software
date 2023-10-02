import { Input } from "antd";
import { IoMdClose } from "react-icons/io";

const ParagraphSelect = () => {
  return (
    <div>
      {/* Question */}
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
            width: "94px",
            height: "30px",
          }}
        >
          Question
        </div>
        <Input
          style={{
            width: "100%",
            height: "68px",
            boxSizing: "border-box",
            border: "1px solid #000",
            position: "relative",

            borderRadius: "5px",
          }}
          placeholder="Type here"
        />
      </div>
      {/* Delete */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 34,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#a80000",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          <IoMdClose style={{ fontSize: "33px" }} />
          Delete Question
        </div>
        <div
          style={{
            width: "59px",
            height: "35px",
            backgroundColor: "#087b2f",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f4fbf7",
            fontSize: "14px",
          }}
        >
          Save
        </div>
      </div>
    </div>
  );
};

export default ParagraphSelect;

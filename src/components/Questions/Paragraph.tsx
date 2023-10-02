import { Input } from "antd";
import { IoMdClose } from "react-icons/io";
import { Select,  } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Paragraph = () => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
        width: "100%",
        height: "569px",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "20px 20px 0px 0px",
          backgroundColor: "#d0f7fa",
          width: "100%",
          height: "93px",
        }}
      >
        Questions
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "42px 32px ",
          gap: 24,
        }}
      >
        {/* Type */}
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
            Type
          </div>
          <Select
            defaultValue="Paragraph"
            style={{
              width: "100%",
              height: "68px",
              boxSizing: "border-box",
              border: "1px solid #000",
              position: "relative",
              borderRadius: "5px",
            }}
            onChange={handleChange}
            options={[
              { value: "Paragraph", label: "Paragraph" },
              { value: "Short answer", label: "Short answer" },
              { value: "Yes/No", label: "Yes/No" },
              { value: "Dropdown", label: "Dropdown" },

              { value: "Multiple choice", label: "Multiple choice" },
              { value: "Date", label: "Date" },
              { value: "Number", label: "Number" },

              { value: "File upload", label: "File upload" },
              { value: "Video question", label: "Video question" },
            ]}
          />
        </div>

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
    </div>
  );
};

export default Paragraph;

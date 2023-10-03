import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const VideoSelector = () => {
  return (
    <>
      <div style={{ paddingTop: "1px" }}>
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
          placeholder=""
        />
      </div>
      {/* Text Area */}

      <div>
        <TextArea rows={4} />
      </div>

      {/* Duration */}
      <div style={{ display: "flex", height: "68px", gap: 12 }}>
        <Input placeholder="Max duration in video" />
        <Select
          defaultValue="in(sec/min)"
          style={{ width: "100%", height: "68px" }}
          options={[
            { value: "sec", label: "Sec" },
            { value: "mins", label: "mins" },
          ]}
        />
      </div>

      {/* Delete */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 34,
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
    </>
  );
};

export default VideoSelector;

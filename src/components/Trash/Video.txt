import React, { useState } from "react";
import { Input } from "antd";
import { BsPencil } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Select } from "antd";

const { TextArea } = Input;

const Video = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const point: React.CSSProperties = {
    position: "relative",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#979797",
    textAlign: "left",
    display: "inline-block",
    width: "87px",
  };

  const question: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
    display: "inline-block",
    width: "439px",
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
        width: "595px",
        minHeight: "965px",
        maxHeight: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "20px 20px 0px 0px",
          backgroundColor: "#d0f7fa",
          height: "93px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginLeft: "29px",
            position: "relative",
            fontSize: "25px",
            lineHeight: "114%",
            fontWeight: "600",
            color: "#000",
            textAlign: "left",
            display: "inline-block",
            width: "287px",
            height: "30px",
          }}
        >
          Additional Question
        </p>
      </div>
      <div style={{ padding: "57px 43px" }}>
        <div>
          <p style={point}>4 minutes</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={question}>Please tell me about yourself?</p>

            <BsPencil onClick={toggleAccordion} />
          </div>
          {isAccordionOpen && (
            <div>
              <h1>Hello there</h1>
            </div>
          )}
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",

              height: "1px",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Second Arccod */}
        <div>
          <p style={point}>2 minutes</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={question}>Why did you apply for this program?</p>
            <BsPencil onClick={toggleAccordion} />
          </div>
          {isAccordionOpen && (
            <>
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
                  placeholder=""
                />
              </div>
              {/* Text Area */}
              <br />
              <br />
              <div>
                <TextArea rows={4} />
              </div>
              <br />
              <br />
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
          )}
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              paddingTop: 24,
              height: "1px",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "5%", left: "5%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            paddingTop: 20,
            position: "relative",
          }}
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

export default Video;

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { Switch } from "antd";
import { Input } from "antd";

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Personal = () => {
  const [switchState, setSwitchState] = useState(false);

  const [switchState1, setSwitchState1] = useState(false);

  const [switchState2, setSwitchState2] = useState(false);
  const [switchState3, setSwitchState3] = useState(false);
  const [switchState4, setSwitchState4] = useState(false);
  const [switchState5, setSwitchState5] = useState(false);

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };
  const handleSwitchChange1 = () => {
    setSwitchState1(!switchState1);
  };
  const handleSwitchChange2 = () => {
    setSwitchState2(!switchState2);
  };
  const handleSwitchChange3 = () => {
    setSwitchState3(!switchState3);
  };
  const handleSwitchChange4 = () => {
    setSwitchState4(!switchState4);
  };
  const handleSwitchChange5 = () => {
    setSwitchState5(!switchState5);
  };

  // const [switchStates, setSwitchStates] = useState([false, false, false]);

  // // Function to handle switch change for a specific switch
  // const handleSwitchChange = (index) => {
  //   const updatedStates = [...switchStates];
  //   updatedStates[index] = !updatedStates[index];
  //   setSwitchStates(updatedStates);
  // };

  const details: React.CSSProperties = {
    position: "relative",
    fontSize: "20px",
    lineHeight: "114%",
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    display: "inline-block",
    width: "202px",
    height: "30px",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
          width: "595px",
          height: "981px",
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
            Personal Informattion
          </p>
        </div>
        {/* Details */}
        <div style={{ padding: "32px 30px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={details}> First Name</div>

            <Input style={{ border: "none", outline: "none" }} />
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
              paddingTop: 20,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}> Last Name</div>

            <Input style={{ border: "none", outline: "none" }} />
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}> Email</div>

            <Input style={{ border: "none", outline: "none" }} />
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          {/* Phone */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                fontSize: "20px",

                lineHeight: "114%",
                fontWeight: 600,

                height: "30px",
                gap: 4,
              }}
            >
              Phone
              <span
                style={{
                  fontSize: "15px",
                  width: "100%",
                  display: "inline-block",
                }}
              >
                (without dial code)
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 12,
              }}
            >
              <div style={{ width: "139px" }}>
                <Checkbox onChange={onChange}>Internal</Checkbox>
              </div>
              <Switch onChange={handleSwitchChange} />
              {switchState ? "Show" : "Hide"}
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          {/* Nationaility */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}>Nationality</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 12,
              }}
            >
              <div style={{ width: "139px" }}>
                <Checkbox onChange={onChange}>Internal</Checkbox>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Switch onChange={handleSwitchChange1} />
                {switchState1 ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          {/* Residence */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}>Current Residence</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 12,
              }}
            >
              <div style={{ width: "139px" }}>
                <Checkbox onChange={onChange}>Internal</Checkbox>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Switch onChange={handleSwitchChange2} />
                {switchState2 ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          {/* ID Number */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}>ID Number</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 12,
              }}
            >
              <div style={{ width: "139px" }}>
                <Checkbox onChange={onChange}>Internal</Checkbox>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Switch onChange={handleSwitchChange3} />
                {switchState3 ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          {/* Date of Birth */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}>Date of Birth</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 12,
              }}
            >
              <div style={{ width: "139px" }}>
                <Checkbox onChange={onChange}>Internal</Checkbox>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Switch onChange={handleSwitchChange4} />
                {switchState4 ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "1px",
              boxSizing: "border-box",
            }}
          ></div>
          {/* Gender */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              paddingBottom: 20,
            }}
          >
            <div style={details}>Gender</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 12,
              }}
            >
              <div style={{ width: "139px" }}>
                <Checkbox onChange={onChange}>Internal</Checkbox>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Switch onChange={handleSwitchChange5} />
                {switchState5 ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          {/* Add a Question */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingTop: 40,
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
    </>
  );
};

export default Personal;

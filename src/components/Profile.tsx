import React from "react";

import { FaPlus } from "react-icons/fa";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { Switch, ConfigProvider } from "antd";

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Profile = () => {
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
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#00b96b",

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "#fff",
            boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
            width: "595px",
            height: "451px",
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
              Profile
            </p>
          </div>
          {/* Details */}
          <div style={{ padding: "32px 30px" }}>
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
              <div style={details}>Education</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 12,
                }}
              >
                <div style={{ width: "139px" }}>
                  <Checkbox onChange={onChange}>Mandatory</Checkbox>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Switch />
                  Hide
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
              <div style={details}>Experience</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 12,
                }}
              >
                <div style={{ width: "139px" }}>
                  <Checkbox  onChange={onChange}>
                    Mandatory
                  </Checkbox>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Switch  />
                  Show
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
              <div style={details}>Resume</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 12,
                }}
              >
                <div style={{ width: "139px" }}>
                  <Checkbox onChange={onChange}>Mandatory</Checkbox>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Switch />
                  Hide
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                paddingTop: 20,
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
      </ConfigProvider>
    </>
  );
};

export default Profile;

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

const Siderbar = () => {
  const rectangleContainerStyles: React.CSSProperties = {
    width: "117.86px",
    height: "3100.31px",
    textAlign: "center",
    fontSize: "16px",
    color: "#fff",
  };

  const groupChild3Styles: React.CSSProperties = {
    position: "absolute",
    top: "0.14px",
    left: "117.86px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.05)",
    width: "3100.17px",
    height: "113.79px",
    transform: "rotate(90.08deg)",
    transformOrigin: "0 0",
  };

  const groupDivStyles: React.CSSProperties = {
    position: "absolute",
    top: "50.31px",
    left: "49.15px",
    width: "22px",
    height: "18.52px",
  };

  const groupChild4Styles: React.CSSProperties = {
    position: "absolute",
    top: "0px",
    left: "0px",
    backgroundColor: "#000",
    width: "22px",
    height: "2.92px",
  };

  const groupChild5Styles: React.CSSProperties = {
    position: "absolute",
    top: "7.8px",
    left: "0px",
    backgroundColor: "#000",
    width: "22px",
    height: "2.92px",
  };

  const groupChild6Styles: React.CSSProperties = {
    position: "absolute",
    top: "15.59px",
    left: "0px",
    backgroundColor: "#000",
    width: "22px",
    height: "2.92px",
  };

  const image295Icon1Styles: React.CSSProperties = {
    position: "absolute",
    top: "163.37px",
    left: "44.15px",
    width: "36px",
    height: "35.09px",
    objectFit: "cover",
    color: "black",
  };

  const image298Icon1Styles: React.CSSProperties = {
    position: "absolute",
    top: "244.26px",
    left: "44.15px",
    width: "33px",
    height: "32.16px",
    objectFit: "cover",
    color: "black",
  };

  const ellipseDivStyles: React.CSSProperties = {
    position: "absolute",
    top: "1213.02px",
    left: "37.04px",
    borderRadius: "50%",
    backgroundColor: "#1d4ed8",
    width: "47px",
    height: "45.81px",
  };

  const ntStyles: React.CSSProperties = {
    position: "absolute",
    top: "1224.71px",
    left: "46.04px",
    fontWeight: 600,
    display: "inline-block",
    width: "30px",
    height: "19.49px",
  };

  return (
    <>
      <div style={rectangleContainerStyles}>
        <div style={groupChild3Styles} />
        <div style={groupDivStyles}>
          <div style={groupChild4Styles} />
          <div style={groupChild5Styles} />
          <div style={groupChild6Styles} />
        </div>
        <AiOutlineHome style={image295Icon1Styles} />
        <CgNotes style={image298Icon1Styles} />
        <div style={ellipseDivStyles} />
        <div style={ntStyles}>NT</div>
      </div>
    </>
  );
};

export default Siderbar;

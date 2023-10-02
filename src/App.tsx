import React from "react";
import Container from "./components/Container";
import Question from "./components/Question";
import Upload from "./components/Upload";
import Siderbar from "./components/Siderbar";
import Personal from "./components/Personal";
import Profile from "./components/Profile";
import Additional from "./components/Additional";
import Paragraph from "./components/Questions/Paragraph";
import Multiple from "./components/Questions/Multiple";
import Dropdown from "./components/Questions/Dropdown";
import YesNo from "./components/Questions/YesNo";
import Video from "./components/Questions/Video";
import QuestionForm from "./components/QuestionForm";
//const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", position: "relative" }}
    >
      <div>
        <Siderbar />
      </div>

      {/* <Question /> */}
      <Container />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          alignItems: "flex-start",
          position: "absolute",
          top: "9%",
          left: "15%",
        }}
      >
        <Upload />
        <Personal />
        <Profile />
        <Additional />
        {/* <Paragraph /> */}
        {/* <Question /> */}
        {/* <Multiple />
        <Dropdown />
        <YesNo />
        <Video />
        <QuestionForm /> */}
      </div>
    </div>
  );
}

export default App;

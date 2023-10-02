import Container from "./components/Container";
import Upload from "./components/Upload";
import Siderbar from "./components/Siderbar";
import Personal from "./components/Personal";
import Profile from "./components/Profile";
import Additional from "./components/Additional";
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
      </div>
    </div>
  );
}

export default App;

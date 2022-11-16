import React from "react";
import Container from "../src/Layout/Container";
import SideBar from "../src/Layout/SideBar";
import Content from "../src/Layout/Content";
import Widgets from "../src/Layout/Widgets";


const App = () => {
  return (
    <Container>
      <SideBar />
      <Content />
      <Widgets />
    </Container>
  );
};
export default App;

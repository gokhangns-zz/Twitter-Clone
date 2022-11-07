import React from 'react';
import Container from './Layout/Container';
import Content from './Layout/Content';
import SideBar from './Layout/SideBar';
import Widgets from './Layout/Widgets';


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
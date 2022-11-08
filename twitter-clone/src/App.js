import React from 'react';
import Container from './Layout/Container';
import Content from './Layout/Content';
import Sidebar from './Layout/SideBar';
import Widgets from './Layout/Widgets';


const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
};
export default App;
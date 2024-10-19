import React from 'react';
import Navigation from './components/Navigation';
import AccordionNew from './components/Accordion';
import ContainerNew from "./components/Container";
import Buttons from './components/Button';
import PaginationNew from "./components/Pagination";
import TabsNew from "./components/Tab";

function App() {
  return (
      <div>

          <Navigation />

          <AccordionNew />

          <h2>React Bootstrap Tutorial</h2>

          <ContainerNew />

          <Buttons />

          <PaginationNew />

          <TabsNew />

      </div>
  )
}

export default App;

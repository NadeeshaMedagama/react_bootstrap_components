import React from 'react';
import Navigation from './components/Navigation';
import AccordionNew from './components/Accordion';
import ContainerNew from "./components/Container";
import Buttons from './components/Button';
import PaginationNew from "./components/Pagination";
import TabsNew from "./components/Tab";
import Event from './event handling/Event';
import UseEffect from "./Use Effect/UseEffect";

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

          <Event />

          <UseEffect />

      </div>
  )
}

export default App;

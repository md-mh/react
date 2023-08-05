import React, { useState } from "react";
import "./App.css";
import Demo from './Demo';

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function App() {
  const accordionData = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Content for Accordion Item 3",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
      <AccordionItem
        title='Test'
        content={<Demo />}
        isOpen={openIndex === 4}
        toggleAccordion={() => toggleAccordion(4)}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Accord.css"; // You can create a CSS file for styling

const AccordTab = ({ label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`accordion ${isExpanded ? "expanded" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-label">{label}</div>
        <div className="accordion-icon">{isExpanded ? "▲" : "▼"}</div>
      </div>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
};

function AccordUnit() {
  return (
    <div className="App">
      <AccordTab label="Accordion 1">
        <p>This is the content of Accordion 1.</p>
      </AccordTab>
      <AccordTab label="Accordion 2">
        <p>This is the content of Accordion 2.</p>
      </AccordTab>
    </div>
  );
}

export default AccordUnit;

import React from "react";
import { useState } from "react";

import "../Accordion/accordion.css";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <div className="accordionMenu">
        <div>
          <div className="flex" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div className="btn">{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Accordion;

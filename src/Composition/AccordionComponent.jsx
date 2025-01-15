import { useState } from "react";

const Accordion = () => {
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <div>
        <button onClick={toggleExpanded}>
          Header <span>{expanded ? "-" : "+"}</span>
        </button>
        {expanded && <div>Content</div>}
      </div>

      <div>
        <button onClick={toggleShow}>
          Header <span>{show ? "-" : "+"}</span>
        </button>
        {show || expanded ?
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instragram</a></li>
          </ul>
          : null
        }
      </div>
    </>

  );
};

export default Accordion;

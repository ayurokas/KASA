import { useState } from "react";
import PropTypes from "prop-types";

Dropdown.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired]),
  title: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool.isRequired,
};

function Dropdown({ title, content, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown__header">
        <h2>{title}</h2>
        <i className={isOpen ? " fa-solid fa-chevron-up dropdown__arrow--open" : "fa-solid fa-chevron-up dropdown__arrow"}></i>
      </button>

      <div className={isOpen ? "dropdown__content" : "dropdown__content--hidden"}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((el, index) => (
              <li key={`${el}-${index}`}>{el}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </article>
  );
}

export default Dropdown;

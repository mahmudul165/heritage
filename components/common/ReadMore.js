import React, { useState } from "react";

const ReadMoreLessButton = ({ text, limit }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      {isExpanded ? (
        <p>{text}</p>
      ) : (
        <p>
          {text.slice(0, limit)}
          ...
          <button className="text-secondary" onClick={() => setExpanded(true)}>Read More</button>
        </p>
      )}
      {isExpanded && (
        <button className="text-secondary"  onClick={() => setExpanded(false)}>Read Less</button>
      )}
    </div>
  );
};

export default ReadMoreLessButton;

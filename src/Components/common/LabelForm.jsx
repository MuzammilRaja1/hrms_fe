import React from "react";

const LabelForm = ({ text }) => {
  return (
    <div>
      <label className="text-gray-800 text-sm mb-2 block">{text}</label>
    </div>
  );
};

export default LabelForm;

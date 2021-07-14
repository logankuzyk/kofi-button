import React from "react";

const KofiButton = ({ title, color, kofiID }) => {
  const { kofiwidget2 } = require("../kofiWidget2");

  kofiwidget2.init(title, color, kofiID);

  return React.createElement(
    div,
    { dangerouslySetInnerHTML: { __html: kofiwidget2.getHTML() } },
    null
  );
};

export default KofiButton;

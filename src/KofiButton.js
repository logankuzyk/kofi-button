import React from "react";

const KofiButton = ({ title, color, kofiID }) => {
  const { kofiwidget2 } = require("./kofiWidget2");

  const KofiWidget2 = kofiwidget2();

  KofiWidget2.init(title, color, kofiID);

  return React.createElement(
    "div",
    { dangerouslySetInnerHTML: { __html: KofiWidget2.getHTML() } },
    null
  );
};

export default KofiButton;

import React from "react";

export const KofiButton = ({ title, color, kofiID }) => {
  const { kofiwidget2 } = require("../kofiWidget2");

  kofiwidget2.init(title, color, kofiID);

  return (
    <div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }}></div>
  );
};

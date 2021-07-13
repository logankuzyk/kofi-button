import React from "react";

interface KofiButtonProps {
  title: string;
  color: string;
  kofiID: string;
}

export const KofiButton: React.FC<KofiButtonProps> = ({
  title,
  color,
  kofiID,
}) => {
  const { kofiwidget2 } = require("../kofiWidget2");

  kofiwidget2.init(title, color, kofiID);

  return (
    <div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }}></div>
  );
};

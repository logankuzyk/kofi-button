import React from "react";

interface KofiButtonProps {
  title: string;
  color: string;
  kofiID: string;
}

declare const KofiButton: React.FC<KofiButtonProps>;

export default KofiButton;

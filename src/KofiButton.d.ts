import React from "react";

declare module KofiButton {
  function KofiButton(
    title: string,
    color: string,
    kofiID: string
  ): React.Component;

  export default KofiButton;
}

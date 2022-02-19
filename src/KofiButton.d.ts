import { FC } from "react";

interface KofiButtonProps {
  title: string;
  color: string;
  kofiID: string;
}

declare const KofiButton: FC<KofiButtonProps>;

export { KofiButton as default };
